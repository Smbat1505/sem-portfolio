import { ArrowUpRight } from "lucide-react";
import { Button, Icon } from "@/src/shared/ui";
import styles from "./contact-orbit-cta.module.css";

export function ContactOrbitCta({
  eyebrow,
  title,
  description,
  action,
  href,
}: {
  eyebrow: string;
  title: string;
  description: string;
  action: string;
  href: string;
}) {
  return (
    <section className={styles.shell} aria-labelledby="contact-orbit-title">
      <div className={styles.grid} aria-hidden="true" />
      <div className={styles.orbitOuter} aria-hidden="true" />
      <div className={styles.orbitMiddle} aria-hidden="true" />
      <div className={styles.orbitInner} aria-hidden="true" />
      <span className={styles.satelliteOne} aria-hidden="true" />
      <span className={styles.satelliteTwo} aria-hidden="true" />

      <div className={styles.content}>
        <p>{eyebrow}</p>
        <h2 id="contact-orbit-title">{title}</h2>
        <span>{description}</span>
        <Button href={href} variant="primary" className={styles.action}>
          {action} <Icon icon={ArrowUpRight} />
        </Button>
      </div>
    </section>
  );
}
