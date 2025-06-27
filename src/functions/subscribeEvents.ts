import throttle from "lodash.throttle";
import type { DebouncedFunc } from 'lodash';

class SubscribeEvents<T extends keyof WindowEventMap> {
    private subscribers: Set<(event: WindowEventMap[T]) => void>;
    private handler: DebouncedFunc<(event: WindowEventMap[T]) => void>;
    private listenerActive: boolean;
    private event: T;

    constructor(event: T, throttleTime: number = 0) {
        this.subscribers = new Set<(event: WindowEventMap[T]) => void>();
        this.handler = throttle((event: WindowEventMap[T]) => this.callSubscribers(event), throttleTime);
        this.listenerActive = false;
        this.event = event;
    }

    private callSubscribers(event: WindowEventMap[T]) {
        for (const callback of this.subscribers) {
            callback(event);
        }
    }

    public subscribe(fn: (event: WindowEventMap[T]) => void) {
        this.subscribers.add(fn);

        if (this.subscribers.size > 0 && !this.listenerActive) {
            window.addEventListener(this.event, this.handler);
            this.listenerActive = true;
        }
    }

    public unsubscribe(fn: (event: WindowEventMap[T]) => void) {
        this.subscribers.delete(fn);

        if (this.subscribers.size === 0 && this.listenerActive) {
            window.removeEventListener(this.event, this.handler);
            this.listenerActive = false;
            this.handler.cancel()
        }
    }
}

export const ScrollEvent = new SubscribeEvents("scroll", 50);
export const ResizeEvent = new SubscribeEvents("resize");
export const MouseMoveEvent = new SubscribeEvents("mousemove", 50);
