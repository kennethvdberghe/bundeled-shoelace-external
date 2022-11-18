import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import "./shoelace-components.js";

export class MyIcon extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 25px;
      color: var(--my-icon-text-color, #000);
    }
  `;

  @property({ type: String }) title = "Hey there";

  @property({ type: Number }) counter = 5;

  __increment() {
    this.counter += 1;
  }

  render() {
    return html`<sl-icon name="1-circle"></sl-icon> `;
  }
}
