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

  @property({ type: String }) library = "fa";

  @property({ type: String }) name = "far-comment";

  render() {
    return html`<sl-icon name=${this.name} library=${this.library}></sl-icon>`;
  }
}
