"use client";

import { useRef, type MouseEvent } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";
import { Icon } from "@/src/shared/ui";

type CaseStudyDemoProps = {
  poster: { src: string; alt: string };
  video: { src: string; caption: string };
  labels: { watch: string; close: string };
};

export function CaseStudyDemo({ poster, video, labels }: CaseStudyDemoProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openDemo = () => {
    dialogRef.current?.showModal();
    void videoRef.current?.play();
  };

  const closeDemo = () => dialogRef.current?.close();

  const handleClosed = () => videoRef.current?.pause();

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) {
      closeDemo();
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openDemo}
        aria-haspopup="dialog"
        className="group relative block aspect-video w-full overflow-hidden rounded-md border border-[var(--color-border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-accent-primary)"
      >
        <Image
          src={poster.src}
          alt={poster.alt}
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="object-cover"
        />
        <span className="absolute inset-0 flex items-center justify-center bg-black/30 transition-colors group-hover:bg-black/15">
          <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-primary)] px-5 py-3 text-sm font-semibold text-[var(--color-bg)]">
            <Icon icon={Play} /> {labels.watch}
          </span>
        </span>
      </button>

      <dialog
        ref={dialogRef}
        onClose={handleClosed}
        onClick={handleBackdropClick}
        aria-label={video.caption}
        className="m-auto w-[min(1100px,92vw)] overflow-hidden rounded-md border border-[var(--color-border)] bg-[var(--color-bg)] p-0 backdrop:bg-black/75"
      >
        <div className="relative">
          <video
            ref={videoRef}
            src={video.src}
            poster={poster.src}
            aria-label={video.caption}
            controls
            muted
            loop
            playsInline
            preload="none"
            className="aspect-video w-full bg-black"
          />
          <button
            type="button"
            onClick={closeDemo}
            aria-label={labels.close}
            className="absolute right-3 top-3 inline-flex size-10 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <Icon icon={X} />
          </button>
        </div>
      </dialog>
    </>
  );
}
