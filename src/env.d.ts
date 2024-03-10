/// <reference types="astro/client" />

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
