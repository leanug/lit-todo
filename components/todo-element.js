import {LitElement, html, css} from 'lit-element';
import style from './todo-style.js';

/**
 * `TodoElement` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class TodoElement extends LitElement {
  static get properties() {
    return {

    }
  }

  /**
   * Instance of the element is created/upgraded. Use: initializing state,
   * set up event listeners, create shadow dom.
   * @constructor
   */
  constructor() {
    super();
    this.list = JSON.parse(localStorage.getItem('litTodoList')) || [];
    this.todo = '';
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
      <div class="todo-body">
        <h1>😎 Lit Todo 😎</h1>
        <todo-list .list=${this.list}></todo-list>
      </div>
    `;
  }

}

customElements.define('todo-element', TodoElement);