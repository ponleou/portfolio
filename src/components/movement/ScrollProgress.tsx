import { useEffect, useRef, useState } from "react";
import { ResizeEvent, ScrollEventThrottled } from "../../functions/subscribeEvents";

export default function ScrollProgress({ targetElementId }: { targetElementId: string }) {
    const parent = useRef<HTMLDivElement>(null);

    function fillParent() {
        parent.current!.innerHTML = "";
        const maxWidth = parent.current!.getBoundingClientRect().width;
        let currentWidth = 0;

        while (currentWidth <= maxWidth) {
            const span = document.createElement("span");
            span.textContent = "=";
            span.className = "transition-opacity duration-200 ease-out";
            parent.current!.appendChild(span);
            currentWidth += span.getBoundingClientRect().width;

            const isOverflow = parent.current!.scrollWidth > Math.round(maxWidth);
            if (currentWidth >= maxWidth || isOverflow) {
                parent.current!.removeChild(span);
                break;
            }
        }
    }

    // observer runs once when ready and deleted itself
    const observer = new ResizeObserver((entries) => {
        const entry = entries[0];

        if (entry.contentRect.width <= 0) return;
        // dont depend on observer to regenerate on size change
        // only using observer to depend on when the size is "ready" (when width is not 0)
        // so once its ready, disconnect the observer and run the function once
        observer.disconnect();

        fillParent();
    });

    const [progress, setProgress] = useState(0);
    const [ready, setReady] = useState(false);

    useEffect(() => {
        /**
         * percentage calculation
         */
        const targetEl = document.getElementById(targetElementId)!;
        const updateProgress = () => {
            const viewportBottom = window.scrollY + window.innerHeight;
            const elTop = window.scrollY + targetEl.getBoundingClientRect().top;
            const progress = ((viewportBottom - elTop) / targetEl.offsetHeight) * 100;
            setProgress(progress >= 0 && targetEl.offsetHeight ? progress : 0);
        };
        ScrollEventThrottled.subscribe(updateProgress);

        /**
         * generating "=" spans
         */
        if (!parent.current) return;
        observer.observe(parent.current);
        const resizeCall = () => {
            observer.disconnect();
            if (parent.current) observer.observe(parent.current);
        };
        ResizeEvent.subscribe(resizeCall);

        setReady(true);

        return () => {
            observer.disconnect();
            ResizeEvent.unsubscribe(resizeCall);
            ScrollEventThrottled.unsubscribe(updateProgress);
            setReady(false);
        };
    }, []);

    /**
     * controlling the "=" for progress bar
     */
    useEffect(() => {
        if (!ready || !parent.current) return;

        const spans = parent.current.querySelectorAll("span");

        const visibleCount = Math.ceil((progress / 100) * spans.length);
        spans.forEach((span, index) => {
            if (index >= visibleCount) {
                span.classList.add("opacity-0");
            } else {
                span.classList.remove("opacity-0");
            }
        });
    }, [ready, progress]);

    return (
        <div className="flex gap-x-4 flex-col-reverse md:flex-row">
            <div className="flex gap-2 grow">
                <p className="">[</p>
                <span ref={parent} className="grow flex justify-between gap-2"></span>
                <p>]</p>
            </div>
            <p className="self-center w-[4ch] text-center md:text-end">{Math.round(progress)}%</p>
        </div>
    );
}
