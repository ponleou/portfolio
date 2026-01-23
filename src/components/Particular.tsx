import { useEffect, useRef } from "react";

type component = { x: number; y: number };
type range<T> = { min: T; max: T };

export default function Particular({
    componentSpeed,
    radius,
    lifespan,
    primaryColorVar,
    accentColorVar,
    particleDensity,
}: {
    componentSpeed: range<component>;
    radius: range<number>;
    lifespan: range<number>;
    primaryColorVar: string;
    accentColorVar: string;
    particleDensity: number;
}) {
    const primaryColor = getComputedStyle(document.documentElement).getPropertyValue(primaryColorVar);
    const accentColor = getComputedStyle(document.documentElement).getPropertyValue(accentColorVar);

    const canvas = useRef<HTMLCanvasElement>(null);

    const rng = (min: number, max: number) => Math.random() * (max - min) + min;

    class CircleFrames {
        private pos: component;
        private speed: component;
        private radius: number;
        private color: string;

        private lifespan: number;
        private currentLife: number;

        private fadeRate: number;

        private canvasWidth: number;
        private canvasHeight: number;

        private spawnChance: number = 0.25;

        private generate() {
            this.currentLife = 0;

            this.pos = { x: rng(0, this.canvasWidth), y: rng(0, this.canvasHeight) };
            this.speed = {
                x: rng(componentSpeed.min.x, componentSpeed.max.x),
                y: rng(componentSpeed.min.y, componentSpeed.max.y),
            };

            // 1/3 is accent color, following 60:30:10
            this.color = rng(0, 1) >= 0.3 ? primaryColor : accentColor;

            this.radius = rng(radius.min, radius.max);
            this.lifespan = rng(lifespan.min, lifespan.max);

            this.fadeRate = rng(0.2, 0.5) * this.lifespan;
        }

        private respawn(): boolean {
            return Math.random() <= this.spawnChance;
        }

        constructor(canvasWidth: number, canvasHeight: number) {
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;

            this.pos = { x: 0, y: 0 };
            this.speed = { x: 0, y: 0 };
            this.radius = 0;
            this.color = "";

            this.lifespan = 0;
            this.currentLife = this.lifespan;

            this.fadeRate = 0;
        }

        private drawFrame(ctx: CanvasRenderingContext2D) {
            let alpha = 1;
            if (this.currentLife < this.fadeRate) {
                alpha = this.currentLife / this.fadeRate;
            } else if (this.currentLife > this.lifespan - this.fadeRate) {
                alpha = 1 - (this.currentLife - (this.lifespan - this.fadeRate)) / this.fadeRate;
            }

            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
            ctx.filter = `blur(3px)`;
            ctx.fillStyle = this.color.replace("rgb", "rgba").replace(")", `,${alpha} )`);
            ctx.fill();
            ctx.closePath();
        }

        private drawNextFrame(ctx: CanvasRenderingContext2D) {
            this.pos.x += this.speed.x;
            this.pos.y += this.speed.y;

            this.drawFrame(ctx);
        }

        public animateFrame(ctx: CanvasRenderingContext2D) {
            if (this.currentLife < this.lifespan) {
                this.currentLife++;
                this.drawNextFrame(ctx);
            } else if (this.respawn()) {
                this.generate();
                this.drawFrame(ctx);
            }
        }
    }

    useEffect(() => {
        if (!canvas.current) return;

        let frameId = -1;
        let particleCount = 0;

        const context = canvas.current.getContext("2d")!;
        const circles: Array<CircleFrames> = [];

        const observer = new ResizeObserver(() => {
            if (frameId >= 0) cancelAnimationFrame(frameId);

            canvas.current!.width = canvas.current!.getBoundingClientRect().width;
            canvas.current!.height = canvas.current!.getBoundingClientRect().height;

            particleCount = particleDensity * (canvas.current!.width * canvas.current!.height);

            render();
        });

        const render = () => {
            context.clearRect(0, 0, canvas.current!.width, canvas.current!.height);

            if (circles.length <= particleCount)
                circles.push(new CircleFrames(canvas.current!.width, canvas.current!.height));

            frameId = requestAnimationFrame(animationLoop);
        };

        const animationLoop = () => {
            if (circles.length <= particleCount)
                circles.push(new CircleFrames(canvas.current!.width, canvas.current!.height));

            context.clearRect(0, 0, canvas.current!.width, canvas.current!.height);
            circles.forEach((c) => c.animateFrame(context));
            frameId = requestAnimationFrame(animationLoop);
        };

        observer.observe(canvas.current.parentElement!);

        return () => {
            if (frameId >= 0) cancelAnimationFrame(frameId);

            circles.splice(0, circles.length);

            observer.disconnect();
        };
    }, []);

    return <canvas ref={canvas} className="w-full h-full"></canvas>;
}
