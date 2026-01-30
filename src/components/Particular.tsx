import { useEffect, useRef } from "react";
import { ScrollEventThrottled } from "../functions/subscribeEvents";
import delay from "../functions/delay";

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
    const canvas = useRef<HTMLCanvasElement>(null);

    const rng = (min: number, max: number) => Math.random() * (max - min) + min;

    class CircleFrames {
        private pos: component;
        private speed: component;
        private radius: number;

        private primaryColor: string;
        private accentColor: string;
        private color: string;

        private lifespan: number;
        private currentLife: number;

        private fadeRate: number;

        private spawnChance: number = 0.25;

        private generate(canvasSize: component) {
            this.currentLife = 0;

            const canvas_rect = canvas.current!.getBoundingClientRect();
            const visibleTop = Math.max(0, -canvas_rect.top);
            const visibleBottom = Math.min(canvasSize.y, window.innerHeight - canvas_rect.top);
            const visibleLeft = Math.max(0, -canvas_rect.left);
            const visibleRight = Math.min(canvasSize.x, window.innerWidth - canvas_rect.left);

            this.pos = {
                x: rng(visibleLeft, visibleRight),
                y: rng(visibleTop, visibleBottom),
            };

            this.speed = {
                x: rng(componentSpeed.min.x, componentSpeed.max.x),
                y: rng(componentSpeed.min.y, componentSpeed.max.y),
            };

            // 1/3 is accent color, following 60:30:10
            this.color = rng(0, 1) >= 0.3 ? this.primaryColor : this.accentColor;

            this.radius = rng(radius.min, radius.max);
            this.lifespan = rng(lifespan.min, lifespan.max);

            this.fadeRate = rng(0.2, 0.5) * this.lifespan;
        }

        private respawn(): boolean {
            return Math.random() <= this.spawnChance;
        }

        constructor(primaryColor: string, accentColor: string) {
            this.pos = { x: 0, y: 0 };
            this.speed = { x: 0, y: 0 };
            this.radius = 0;
            this.color = "";

            this.primaryColor = primaryColor;
            this.accentColor = accentColor;

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

            ctx.save();

            // ctx.filter = `blur(3px)`;
            ctx.shadowColor = this.color;
            ctx.shadowBlur = 6;
            ctx.globalAlpha = Math.max(0, Math.min(1, alpha));

            ctx.beginPath();
            ctx.arc(this.pos.x, this.pos.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;

            // spamming fill because shadow is too weak
            ctx.fill();
            ctx.fill();
            ctx.fill();
            ctx.fill();
            ctx.fill();
            ctx.fill();
            ctx.closePath();

            ctx.restore();
        }

        private processNextFrame(animationFps: number, targetFps: number) {
            this.pos.x += this.speed.x * (targetFps / animationFps);
            this.pos.y += this.speed.y * (targetFps / animationFps);
        }

        public animateFrame(
            ctx: CanvasRenderingContext2D,
            canvasSize: component,
            allowRespawn: boolean,
            animationFps: number,
            targetFps: number,
        ): boolean {
            if (this.currentLife < this.lifespan) {
                this.currentLife += 1 * (targetFps / animationFps);
                this.processNextFrame(animationFps, targetFps);

                const canvas_rect = canvas.current!.getBoundingClientRect();

                // if not in viewport, take away extra life and dont draw
                if (
                    this.pos.x + canvas_rect.left < 0 ||
                    this.pos.x + canvas_rect.left > window.innerWidth ||
                    this.pos.y + canvas_rect.top < 0 ||
                    this.pos.y + canvas_rect.top > window.innerHeight
                ) {
                    this.currentLife += 2 * (targetFps / animationFps);
                } else {
                    this.drawFrame(ctx);
                }

                return true;
            } else if (this.respawn() && allowRespawn) {
                // generating is guarenteed to be within viewport, so no need to check
                this.generate(canvasSize);
                this.drawFrame(ctx);

                return true;
            }

            return false;
        }
    }

    useEffect(() => {
        if (!canvas.current) return;

        const primaryColor = getComputedStyle(document.documentElement).getPropertyValue(primaryColorVar);
        const accentColor = getComputedStyle(document.documentElement).getPropertyValue(accentColorVar);

        const FPS = 15;
        const interval = 1000 / FPS;

        let frameId = -1;
        let particleCount = 0;

        const context = canvas.current.getContext("2d")!;
        const circles: Array<CircleFrames> = [];

        const observer = new ResizeObserver(() => {
            if (frameId >= 0) {
                cancelAnimationFrame(frameId);
            }

            canvas.current!.width = canvas.current!.getBoundingClientRect().width;
            canvas.current!.height = canvas.current!.getBoundingClientRect().height;

            render();
        });

        const calculateParticleCount = () => {
            const canvas_rect = canvas.current!.getBoundingClientRect();

            const visibleWidth = Math.min(
                canvas.current!.width,
                Math.max(0, Math.min(canvas_rect.right, window.innerWidth) - Math.max(canvas_rect.left, 0)),
            );
            const visibleHeight = Math.min(
                canvas.current!.height,
                Math.max(0, Math.min(canvas_rect.bottom, window.innerHeight) - Math.max(canvas_rect.top, 0)),
            );

            particleCount = particleDensity * (visibleWidth * visibleHeight);
        };

        ScrollEventThrottled.subscribe(calculateParticleCount);

        const render = () => {
            context.clearRect(0, 0, canvas.current!.width, canvas.current!.height);

            if (circles.length < particleCount) circles.push(new CircleFrames(primaryColor, accentColor));

            frameId = requestAnimationFrame(animationLoop);
        };

        let lastTime = 0;
        const animationLoop = async (time: DOMHighResTimeStamp) => {
            const timeLeft = interval - (time - lastTime);
            if (timeLeft > 0) {
                await delay(timeLeft);
                frameId = requestAnimationFrame(animationLoop);
                return;
            }
            lastTime = time;

            if (circles.length < particleCount) circles.push(new CircleFrames(primaryColor, accentColor));

            context.clearRect(0, 0, canvas.current!.width, canvas.current!.height);
            circles.forEach((c: CircleFrames, i: number) => {
                // only allow the number of cirle frames within the particle limit to respawn
                const allowRespawn = i < particleCount;

                // they are not animated if they have died, and havent respawned (due to respawnRate and allowRespawn)
                const animated = c.animateFrame(
                    context,
                    { x: canvas.current!.width, y: canvas.current!.height },
                    allowRespawn,
                    FPS,
                    60,
                );

                // essentially, if the current circle has died, and it is currently outside of the particle count (respawn not allowed), delete it
                if (!allowRespawn && !animated) {
                    circles.splice(i, 1);
                }
            });
            frameId = requestAnimationFrame(animationLoop);
        };

        observer.observe(canvas.current.parentElement!);

        return () => {
            if (frameId >= 0) cancelAnimationFrame(frameId);

            circles.splice(0, circles.length);

            observer.disconnect();

            ScrollEventThrottled.unsubscribe(calculateParticleCount);
        };
    }, []);

    return <canvas ref={canvas} className="w-full h-full opacity-40"></canvas>;
}
