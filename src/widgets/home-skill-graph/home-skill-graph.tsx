"use client";

import { useEffect, useRef, useState } from "react";
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { ArrowUpRight } from "lucide-react";
import type { Capability } from "@/src/entities/capability";
import { getDictionary, withLocalePath, type Locale } from "@/src/shared/i18n";
import { cn } from "@/src/shared/lib/cn";
import { Icon, Tag } from "@/src/shared/ui";
import styles from "./home-skill-graph.module.css";

type GraphCluster = "product" | "systems" | "delivery";
type GraphNodeKind = "domain" | "skill";

type GraphPlacement = {
  cluster: GraphCluster;
  kind: GraphNodeKind;
  orbitAngle: number;
  orbitRadius: number;
};

type GraphLayout = GraphPlacement & {
  x: number;
  y: number;
};

type GraphNode = Capability & GraphLayout;

const center = {
  x: 50,
  y: 50,
};

const rayLengths = [
  26, 34, 23, 38, 28, 31, 22, 36, 25, 33, 27, 40, 24, 30, 35, 21, 37, 29, 25, 39, 23, 32, 28, 36, 22, 34, 26, 41, 24,
  31, 27, 35,
];
const rayRotationDurationMs = Math.round((360 / 3.8) * 1000);

const rotateOrbit = keyframes`
  from {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  to {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const breatheSun = keyframes`
  0%, 100% {
    opacity: 0.45;
    transform: scale(0.96);
  }

  50% {
    opacity: 0.8;
    transform: scale(1.04);
  }
`;

const OrbitTrack = styled.div<{ $active: boolean; $durationMs: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  border: 1px solid var(--color-subtle-border);
  border-radius: 50%;
  opacity: 0.34;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition:
    border-color 280ms ease,
    box-shadow 280ms ease,
    opacity 280ms ease;

  ${({ $active, $durationMs }) =>
    $active &&
    css`
      border-color: var(--color-accent-primary);
      border-style: dashed;
      box-shadow:
        inset 0 0 1rem var(--color-accent-ghost),
        0 0 1rem var(--color-accent-ghost);
      opacity: 0.82;
      animation: ${rotateOrbit} ${$durationMs}ms linear infinite;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const SatelliteOrbitTrack = styled.div<{
  $clusterActive: boolean;
  $durationMs: number;
  $selected: boolean;
}>`
  position: absolute;
  z-index: 2;
  border: 1px dotted var(--color-subtle-border);
  border-radius: 50%;
  opacity: 0.1;
  pointer-events: none;
  transform: translate(-50%, -50%);
  transition:
    border-color 320ms ease,
    box-shadow 320ms ease,
    opacity 320ms ease;

  ${({ $clusterActive, $durationMs }) =>
    $clusterActive &&
    css`
      border-color: var(--color-accent-border);
      opacity: 0.34;
      animation: ${rotateOrbit} ${$durationMs}ms linear infinite;
    `}

  ${({ $selected }) =>
    $selected &&
    css`
      border-color: var(--color-accent-primary);
      border-style: dashed;
      box-shadow:
        inset 0 0 0.7rem var(--color-accent-ghost),
        0 0 0.8rem var(--color-accent-ghost);
      opacity: 0.76;
    `}

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;

const Sun = styled.div<{ $active: boolean; $highlightX: number; $highlightY: number }>`
  &::before,
  &::after {
    position: absolute;
    border-radius: 50%;
    content: "";
    pointer-events: none;
  }

  &::before {
    z-index: 0;
    top: ${({ $highlightY }) => $highlightY}%;
    left: ${({ $highlightX }) => $highlightX}%;
    width: 2.35rem;
    height: 2.35rem;
    background: radial-gradient(
      circle,
      color-mix(in srgb, var(--color-accent-primary) 46%, white),
      color-mix(in srgb, var(--color-accent-primary) 18%, transparent) 46%,
      transparent 72%
    );
    filter: blur(0.12rem);
    opacity: ${({ $active }) => ($active ? 0.74 : 0.52)};
    transform: translate(-50%, -50%);
    transition:
      top 620ms cubic-bezier(0.22, 1, 0.36, 1),
      left 620ms cubic-bezier(0.22, 1, 0.36, 1),
      opacity 280ms ease;
  }

  &::after {
    z-index: -1;
    inset: -0.72rem;
    border: 1px solid var(--color-accent-border);
    box-shadow: 0 0 2.2rem var(--color-accent-tint);
    animation: ${breatheSun} 4800ms ease-in-out infinite;
  }

  @media (prefers-reduced-motion: reduce) {
    &::before {
      transition: none;
    }

    &::after {
      animation: none;
    }
  }
`;

const graphLayout: Record<string, GraphPlacement> = {
  "product-delivery": { cluster: "product", kind: "domain", orbitAngle: 190, orbitRadius: 30 },
  "frontend-architecture": { cluster: "systems", kind: "domain", orbitAngle: 350, orbitRadius: 32 },
  "testing-ci": { cluster: "delivery", kind: "domain", orbitAngle: 105, orbitRadius: 34 },
  "ui-engineering": { cluster: "product", kind: "skill", orbitAngle: 225, orbitRadius: 42 },
  "api-contracts": { cluster: "systems", kind: "skill", orbitAngle: 315, orbitRadius: 43 },
  automation: { cluster: "delivery", kind: "skill", orbitAngle: 65, orbitRadius: 44 },
  accessibility: { cluster: "product", kind: "skill", orbitAngle: 155, orbitRadius: 45 },
  performance: { cluster: "systems", kind: "skill", orbitAngle: 25, orbitRadius: 46 },
};

function getGraphCoordinates(placement: GraphPlacement) {
  const angle = placement.orbitAngle * (Math.PI / 180);

  return {
    x: center.x + Math.cos(angle) * placement.orbitRadius,
    y: center.y + Math.sin(angle) * placement.orbitRadius,
  };
}

function angularDistance(first: number, second: number) {
  return Math.abs(((first - second + 540) % 360) - 180);
}

function getSunHighlight(angle: number) {
  const radians = angle * (Math.PI / 180);

  return {
    x: 50 + Math.cos(radians) * 18,
    y: 50 + Math.sin(radians) * 18,
  };
}

export function HomeSkillGraph({ capabilities, locale }: { capabilities: Capability[]; locale: Locale }) {
  const nodes = capabilities.flatMap<GraphNode>((capability) => {
    const placement = graphLayout[capability.id];
    return placement ? [{ ...capability, ...placement, ...getGraphCoordinates(placement) }] : [];
  });
  const [activeId, setActiveId] = useState<string>();
  const activeNode = nodes.find((node) => node.id === activeId);
  const domains = nodes.filter((node) => node.kind === "domain");
  const skills = nodes.filter((node) => node.kind === "skill");
  const copy = getDictionary(locale).skillGraph;
  const activeDomain = activeNode
    ? activeNode.kind === "domain"
      ? activeNode
      : domains.find((domain) => domain.cluster === activeNode.cluster)
    : undefined;
  const canvasRef = useRef<HTMLDivElement>(null);
  const rayRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const rayTargetsRef = useRef<{ primary?: GraphNode; secondary?: GraphNode }>({});

  useEffect(() => {
    rayTargetsRef.current = {
      primary: activeNode,
      secondary: activeNode?.kind === "skill" ? activeDomain : undefined,
    };
  }, [activeDomain, activeNode]);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const rootFontSize = Number.parseFloat(window.getComputedStyle(document.documentElement).fontSize) || 16;
    const rayStart = rootFontSize * 4.2;
    let canvasWidth = canvas.clientWidth || 528;
    let reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    let animationFrame = 0;
    let lastUpdate = 0;
    const startedAt = performance.now();
    const resizeObserver =
      typeof ResizeObserver === "undefined"
        ? undefined
        : new ResizeObserver(([entry]) => {
            canvasWidth = entry.contentRect.width;
          });
    const motionQuery = window.matchMedia?.("(prefers-reduced-motion: reduce)");
    const handleMotionChange = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches;
    };

    resizeObserver?.observe(canvas);
    motionQuery?.addEventListener("change", handleMotionChange);

    const getTargetLength = (target: GraphNode | undefined) => {
      if (!target) return 0;

      const nodeRadius = rootFontSize * (target.kind === "domain" ? 2.85 : 2.55);
      return Math.max(18, (target.orbitRadius / 100) * canvasWidth - rayStart - nodeRadius + 8);
    };

    const animateRays = (now: number) => {
      const frameInterval = reduceMotion ? 250 : 1000 / 30;

      if (now - lastUpdate < frameInterval) {
        animationFrame = window.requestAnimationFrame(animateRays);
        return;
      }

      lastUpdate = now;
      const { primary, secondary } = rayTargetsRef.current;
      const rotation = reduceMotion ? 0 : ((now - startedAt) / 1000) * 3.8;
      const primaryLength = getTargetLength(primary);
      const secondaryLength = getTargetLength(secondary);
      const isIdle = !primary;
      const elapsedSeconds = (now - startedAt) / 1000;

      rayRefs.current.forEach((ray, index) => {
        if (!ray) return;

        const baseAngle = (360 / rayLengths.length) * index;
        const actualAngle = (baseAngle + rotation) % 360;
        const primaryDistance = primary ? angularDistance(actualAngle, primary.orbitAngle) : 180;
        const secondaryDistance = secondary ? angularDistance(actualAngle, secondary.orbitAngle) : 180;
        const primaryWeight = Math.max(0, 1 - primaryDistance / 13);
        const secondaryWeight = Math.max(0, 1 - secondaryDistance / 15);
        const emphasis = Math.max(primaryWeight, secondaryWeight * 0.62);
        const baseLength = rayLengths[index];
        const idlePulse = isIdle && !reduceMotion ? (Math.sin(elapsedSeconds * 1.7 - index * 0.58) + 1) / 2 : 0;
        const rayLength = Math.max(
          baseLength + idlePulse * 7,
          baseLength + primaryWeight * (primaryLength - baseLength),
          baseLength + secondaryWeight * (secondaryLength - baseLength),
        );

        ray.style.setProperty("--ray-angle", `${actualAngle}deg`);
        ray.style.setProperty("--ray-length", `${rayLength}px`);
        ray.style.setProperty("--ray-width", `${1.2 + emphasis * 2.4 + idlePulse * 0.35}px`);
        ray.style.setProperty("--ray-opacity", String(0.18 + emphasis * 0.8 + idlePulse * 0.18));
        ray.style.setProperty("--ray-glow", `${4 + emphasis * 16 + idlePulse * 5}px`);
      });

      animationFrame = window.requestAnimationFrame(animateRays);
    };

    if (typeof window.requestAnimationFrame === "function") {
      animationFrame = window.requestAnimationFrame(animateRays);
    }

    return () => {
      window.cancelAnimationFrame?.(animationFrame);
      resizeObserver?.disconnect();
      motionQuery?.removeEventListener("change", handleMotionChange);
    };
  }, []);

  const sunHighlight = activeNode ? getSunHighlight(activeNode.orbitAngle) : { x: 50, y: 50 };

  return (
    <aside className={styles.shell} aria-label={copy.eyebrow}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{copy.eyebrow}</span>
        <p>{copy.hint}</p>
      </div>

      <div className={styles.desktopGraph}>
        <div ref={canvasRef} className={styles.canvas}>
          {nodes.map((node) => (
            <OrbitTrack
              key={`orbit-${node.id}`}
              aria-hidden="true"
              data-active={node.id === activeNode?.id}
              data-orbit-for={node.id}
              $active={node.id === activeNode?.id}
              $durationMs={rayRotationDurationMs + (node.orbitRadius - 38) * 220}
              style={{ width: `${node.orbitRadius * 2}%`, height: `${node.orbitRadius * 2}%` }}
            />
          ))}

          {domains.flatMap((domain) =>
            skills
              .filter((skill) => skill.cluster === domain.cluster)
              .map((skill, index) => {
                const orbitSize = 6.75 + index * 1.05;

                return (
                  <SatelliteOrbitTrack
                    key={`satellite-orbit-${skill.id}`}
                    aria-hidden="true"
                    data-domain-orbit-for={domain.id}
                    data-satellite-active={skill.id === activeNode?.id}
                    data-satellite-orbit-for={skill.id}
                    $clusterActive={domain.cluster === activeNode?.cluster}
                    $durationMs={rayRotationDurationMs + index * 7200}
                    $selected={skill.id === activeNode?.id}
                    style={{
                      left: `${domain.x}%`,
                      top: `${domain.y}%`,
                      width: `${orbitSize}rem`,
                      height: `${orbitSize}rem`,
                    }}
                  />
                );
              }),
          )}

          <div
            className={styles.corona}
            data-idle={!activeNode}
            data-primary-target={activeNode?.id}
            data-secondary-target={activeNode?.kind === "skill" ? activeDomain?.id : undefined}
            aria-hidden="true"
          >
            {rayLengths.map((length, index) => (
              <span
                key={`${length}-${index}`}
                ref={(element) => {
                  rayRefs.current[index] = element;
                }}
                className={styles.sunRay}
                data-solar-ray="true"
              />
            ))}
          </div>

          <Sun
            className={styles.center}
            style={{ left: `${center.x}%`, top: `${center.y}%` }}
            aria-hidden="true"
            $active={Boolean(activeNode)}
            $highlightX={sunHighlight.x}
            $highlightY={sunHighlight.y}
          >
            <strong>{copy.centerTitle}</strong>
            <span>{copy.centerMeta}</span>
          </Sun>

          {nodes.map((node) => {
            const isActive = node.id === activeNode?.id;
            const isRelated = !activeNode || node.cluster === activeNode.cluster;

            return (
              <span
                key={node.id}
                className={cn(styles.nodePosition, !isRelated && styles.nodeMuted)}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                }}
              >
                <button
                  type="button"
                  aria-pressed={isActive}
                  className={cn(
                    styles.node,
                    node.kind === "domain" ? styles.nodeDomain : styles.nodeSkill,
                    isActive && styles.nodeActive,
                  )}
                  onClick={() => setActiveId(node.id)}
                  onFocus={() => setActiveId(node.id)}
                  onMouseEnter={() => setActiveId(node.id)}
                >
                  {node.title}
                </button>
              </span>
            );
          })}
        </div>
      </div>

      <div className={styles.mobileGraph}>
        <div className={styles.clusterTabs} aria-label={copy.eyebrow}>
          {domains.map((domain) => (
            <button
              key={domain.id}
              type="button"
              aria-pressed={domain.cluster === activeNode?.cluster}
              onClick={() => setActiveId(domain.id)}
            >
              {domain.title}
            </button>
          ))}
        </div>
        <div className={styles.clusterNodes}>
          {skills
            .filter((node) => node.cluster === activeNode?.cluster)
            .map((node) => (
              <button
                key={node.id}
                type="button"
                aria-pressed={node.id === activeNode?.id}
                onClick={() => setActiveId(node.id)}
              >
                {node.title}
              </button>
            ))}
        </div>
      </div>

      <div className={styles.detail} data-testid="skill-graph-detail" aria-live="polite">
        <div className={styles.detailStack}>
          <div
            className={cn(styles.detailPanel, styles.detailIdle, !activeNode && styles.detailPanelActive)}
            data-detail-panel="idle"
            aria-hidden={Boolean(activeNode)}
          >
            <span aria-hidden="true" />
            <div>
              <h2>{copy.idleTitle}</h2>
              <p>{copy.idleMeta}</p>
            </div>
          </div>

          {nodes.map((node) => {
            const isPanelActive = node.id === activeNode?.id;

            return (
              <div
                key={`detail-${node.id}`}
                className={cn(styles.detailPanel, isPanelActive && styles.detailPanelActive)}
                data-detail-panel={node.id}
                aria-hidden={!isPanelActive}
              >
                <div className={styles.detailLead}>
                  <div className={styles.detailMeta}>
                    <span>{node.kind === "domain" ? "01" : "02"}</span>
                    {node.type === "supporting" ? <Tag>{copy.supporting}</Tag> : null}
                  </div>
                  <h2>{node.title}</h2>
                  <p>{node.description}</p>
                </div>
                <div className={styles.detailProof}>
                  <span>{copy.evidence}</span>
                  <p>{node.evidence}</p>
                  <div className={styles.projects}>
                    <small>{copy.relatedWork}</small>
                    {node.relatedProjects.map((project) => (
                      <span key={project}>{project}</span>
                    ))}
                  </div>
                  <a href={withLocalePath("/capabilities", locale)} tabIndex={isPanelActive ? undefined : -1}>
                    {copy.explore}
                    <Icon icon={ArrowUpRight} className="size-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
