import { LitElement, html } from 'lit-element';

class MainElement extends LitElement {
  render() {
    return html`
      <div>Hello from MyElement!</div>
    `;
  }
}

customElements.define('main-view', MainElement);