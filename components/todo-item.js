import { LitElement, html } from 'lit-element';
import style from './todo-style';

/**
 * `TodoItem` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class TodoItem extends LitElement {
  static get properties() {
    return {
      item: { type: String }
    }
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
  }

  static get styles() {
    return [style];
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html`
      <h2>${ this.item }</h2>
    `;
  }

}

customElements.define('todo-item', TodoItem);