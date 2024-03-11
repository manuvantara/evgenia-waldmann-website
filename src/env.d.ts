/// <reference types="astro/client" />

declare module "css-has-pseudo/browser";

declare interface CustomElement extends HTMLElement {
  connectedCallback(): void;
  disconnectedCallback(): void;
  adoptedCallback(): void;
  attributeChangedCallback(
    attributeName: string,
    oldValue: string | null,
    newValue: string,
  ): void;
}
