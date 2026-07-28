"use client";

import type { CSSProperties } from "react";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Capability } from "@/src/entities/capability";
import { withLocalePath, type Locale } from "@/src/shared/i18n";
import { cn } from "@/src/shared/lib/cn";
import { Icon, Tag } from "@/src/shared/ui";
import styles from "./home-skill-graph.module.css";

type GraphCluster = "product" | "systems" | "delivery";
type GraphNodeKind = "domain" | "skill";

type GraphLayout = {
  cluster: GraphCluster;
  kind: GraphNodeKind;
  x: number;
  y: number;
};

type GraphNode = Capability & GraphLayout;

type GraphPoint = Pick<GraphLayout, "cluster" | "x" | "y"> & {
  id: string;
};

const center: GraphPoint = {
  id: "product-outcome",
  cluster: "systems",
  x: 50,
  y: 44,
};

const graphLayout: Record<string, GraphLayout> = {
  "product-delivery": { cluster: "product", kind: "domain", x: 18, y: 43 },
  "ui-engineering": { cluster: "product", kind: "skill", x: 11, y: 14 },
  accessibility: { cluster: "product", kind: "skill", x: 10, y: 73 },
  "frontend-architecture": { cluster: "systems", kind: "domain", x: 82, y: 43 },
  "api-contracts": { cluster: "systems", kind: "skill", x: 89, y: 14 },
  performance: { cluster: "systems", kind: "skill", x: 90, y: 73 },
  "testing-ci": { cluster: "delivery", kind: "domain", x: 50, y: 77 },
  automation: { cluster: "delivery", kind: "skill", x: 50, y: 94 },
};

const labels = {
  en: {
    eyebrow: "Interactive skill graph",
    hint: "Hover, focus, or tap a node to trace how the skills connect.",
    centerTitle: "Product outcome",
    centerMeta: "Clear under complexity",
    supporting: "Supporting",
    evidence: "Evidence",
    relatedWork: "Related work",
    explore: "Explore capabilities",
  },
  ru: {
    eyebrow: "Интерактивный граф компетенций",
    hint: "Наведите курсор, сфокусируйтесь или нажмите на узел, чтобы увидеть связи.",
    centerTitle: "Результат продукта",
    centerMeta: "Ясность в сложности",
    supporting: "Поддерживающий",
    evidence: "Доказательство",
    relatedWork: "Связанные проекты",
    explore: "Изучить компетенции",
  },
} satisfies Record<Locale, Record<string, string>>;

function getConnectionStyle(from: GraphPoint, to: GraphPoint): CSSProperties {
  const deltaX = to.x - from.x;
  const deltaY = to.y - from.y;
  const length = Number(Math.sqrt(deltaX ** 2 + deltaY ** 2).toFixed(4));
  const angle = Number((Math.atan2(deltaY, deltaX) * (180 / Math.PI)).toFixed(4));

  return {
    left: `${from.x}%`,
    top: `${from.y}%`,
    width: `${length}%`,
    transform: `rotate(${angle}deg)`,
  };
}

export function HomeSkillGraph({ capabilities, locale }: { capabilities: Capability[]; locale: Locale }) {
  const nodes = capabilities.flatMap<GraphNode>((capability) => {
    const layout = graphLayout[capability.id];
    return layout ? [{ ...capability, ...layout }] : [];
  });
  const defaultNode = nodes.find((node) => node.id === "frontend-architecture") ?? nodes[0];
  const [activeId, setActiveId] = useState(defaultNode?.id);
  const activeNode = nodes.find((node) => node.id === activeId) ?? defaultNode;
  const domains = nodes.filter((node) => node.kind === "domain");
  const skills = nodes.filter((node) => node.kind === "skill");
  const copy = labels[locale];

  if (!activeNode) return null;

  const connections = [
    ...domains.map((domain) => ({ from: center, to: domain, cluster: domain.cluster })),
    ...skills.map((skill) => ({
      from: domains.find((domain) => domain.cluster === skill.cluster) ?? center,
      to: skill,
      cluster: skill.cluster,
    })),
  ];

  return (
    <aside className={styles.shell} aria-label={copy.eyebrow}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{copy.eyebrow}</span>
        <p>{copy.hint}</p>
      </div>

      <div className={styles.desktopGraph}>
        <div className={styles.canvas}>
          <div className={cn(styles.orbit, styles.orbitOuter)} aria-hidden="true" />
          <div className={cn(styles.orbit, styles.orbitInner)} aria-hidden="true" />

          {connections.map((connection) => (
            <span
              key={`${connection.from.id}-${connection.to.id}`}
              aria-hidden="true"
              className={cn(styles.connection, connection.cluster === activeNode.cluster && styles.connectionActive)}
              style={getConnectionStyle(connection.from, connection.to)}
            />
          ))}

          <div className={styles.center} style={{ left: `${center.x}%`, top: `${center.y}%` }} aria-hidden="true">
            <strong>{copy.centerTitle}</strong>
            <span>{copy.centerMeta}</span>
          </div>

          {nodes.map((node) => {
            const isActive = node.id === activeNode.id;
            const isRelated = node.cluster === activeNode.cluster;

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
              aria-pressed={domain.cluster === activeNode.cluster}
              onClick={() => setActiveId(domain.id)}
            >
              {domain.title}
            </button>
          ))}
        </div>
        <div className={styles.clusterNodes}>
          {skills
            .filter((node) => node.cluster === activeNode.cluster)
            .map((node) => (
              <button
                key={node.id}
                type="button"
                aria-pressed={node.id === activeNode.id}
                onClick={() => setActiveId(node.id)}
              >
                {node.title}
              </button>
            ))}
        </div>
      </div>

      <div className={styles.detail} aria-live="polite">
        <div className={styles.detailLead}>
          <div className={styles.detailMeta}>
            <span>{activeNode.kind === "domain" ? "01" : "02"}</span>
            {activeNode.type === "supporting" ? <Tag>{copy.supporting}</Tag> : null}
          </div>
          <h2>{activeNode.title}</h2>
          <p>{activeNode.description}</p>
        </div>
        <div className={styles.detailProof}>
          <span>{copy.evidence}</span>
          <p>{activeNode.evidence}</p>
          <div className={styles.projects}>
            <small>{copy.relatedWork}</small>
            {activeNode.relatedProjects.map((project) => (
              <span key={project}>{project}</span>
            ))}
          </div>
          <a href={withLocalePath("/capabilities", locale)}>
            {copy.explore}
            <Icon icon={ArrowUpRight} className="size-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}
