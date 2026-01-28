/// <reference types="vite/client" />

declare module "@data/projects-*.json" {
    const value: Record<string, object>;
    export default value;
}
