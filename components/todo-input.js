import {LitElement, html } from 'lit-element';
import style from './todo-style';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class TodoInput extends LitElement {
  static get properties() {
    return {
      todo: { type: String },
      onInput: { type: Function },
      onKeyPress: { type: Function },
      createNewToDoItem: { type: Function },
      handleInput: { type: Function },
      handleKeyPress: { type: Function }
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

  createNewToDoItem(){
    // Get the saved todo list from the browser's localStorage 
    const todoList = JSON.parse(localStorage.getItem('litTodoList')) || []
    // Update the list property of the element to reflect the updated todo list
    todoList.push(this.todo)
    this.list = todoList
    console.log("this.list", this.list);
    localStorage.setItem('litTodoList', JSON.stringify(todoList))
    this.todo = ""
  }

  handleKeyPress(e) {
    if (e.target.value !== '' && e.key === 'Enter') {
        this.createNewToDoItem();
    }
}

  handleInput(e) {
      this.todo = e.target.value;
  }

  /**
   * Implement to describe the element's DOM using lit-html.
   * Use the element current props to return a lit-html template result
   * to render into the element.
   */
  render() {
    return html`
      <div class="todo-input">
        <input 
          type="text"
          .value=${ this.todo }
          @input=${ this.handleInput }
          @keyPress=${ this.handleKeyPress }
        />
        <button
          class="todo-button"
          @click=${ this.createNewToDoItem }
        >
          Add
        </button>
      </div>
    `;
  }

}

customElements.define('todo-input', TodoInput);