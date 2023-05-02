import { LitElement, html, css } from 'lit-element';

/**
 * `CustomMessage` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class CustomMessage extends LitElement {
  static styles = css`
    :host {
      display: block;
      background-color: red;
    }

    p {
      background-color: blue;
      color: white;
    }
  `

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html`
      <h1>Hola lit como va?</h1>
      <p>Hello, world! yo tambien voy aqui</p>
    `;
  }

}

customElements.define('custom-message', CustomMessage);