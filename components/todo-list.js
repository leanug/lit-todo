import { LitElement, html } from 'lit-element';
import style from './todo-style.js';

/**
 * `TodoList` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class TodoList extends LitElement {
  static get properties() {
    return {
      list:{ type: Array }
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
      <ul>
        ${this?.list?.map(todoItem => html`<li><todo-item item=${ todoItem }></todo-item></li>`)}
      </ul>
    `;
  }

}

customElements.define('todo-list', TodoList);