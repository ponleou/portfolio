import { useEffect, useRef, useState, type ReactNode } from "react";

export default function GoldenHorizontal({
  className,
  top,
  bottom,
}: {
  className: string;
  top: ReactNode;
  bottom: ReactNode;
}) {
  const parent = useRef<HTMLDivElement>(null);
  const topElement = useRef<HTMLDivElement>(null);
  const bottomElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new ResizeObserver(() => {
      if (!parent.current || !topElement.current || !bottomElement.current)
        return;

      const ratio = parent.current.offsetHeight / 2.618;

      const topPos =
        ratio - topElement.current.getBoundingClientRect().height / 2;
      topElement.current.style.top = `${topPos}px`;

      const bottomPos =
        ratio - bottomElement.current.getBoundingClientRect().height / 2;
      bottomElement.current.style.bottom = `${bottomPos}px`;
    });

    if (parent.current) observer.observe(parent.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={parent} className={`${className} relative`}>
      <div ref={topElement} className="absolute left-0 right-0">
        {top}
      </div>
      <div ref={bottomElement} className="absolute left-0 right-0">
        {bottom}
      </div>
    </div>
  );
}
