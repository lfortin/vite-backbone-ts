/// <reference types="vite/client" />

declare module "bootstrap" {
  export class Collapse {
    constructor(element: Element | string, options?: Record<string, unknown>);
    static getInstance(element: Element | string): Collapse | null;
  }
}
