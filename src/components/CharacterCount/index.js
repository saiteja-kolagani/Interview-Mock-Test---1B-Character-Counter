import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CharLength from '../CharLength'

import './index.css'

class CharacterCount extends Component {
  state = {inputValue: '', arrayOfItems: []}

  addToList = () => {
    const {inputValue, arrayOfItems} = this.state
    const newItem = {
      id: uuidv4(),
      textValue: inputValue,
    }
    arrayOfItems.push(newItem)
    // console.log(newItem)
    console.log(arrayOfItems)
    this.setState({inputValue: ''})
  }

  onInputEnter = event => {
    this.setState({inputValue: event.target.value})
  }

  displayNoUserInput = () => (
    <img
      src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
      alt="no user inputs"
      className="no-user-input"
    />
  )
  /*
  displayCharCount = () => (
      const {arrayOfItems}=state
        <ul>{
            arrayOfItems.map(eachItem=>(
                <CharLength key={eachItem.id} itemDetails={eachItem} />
            ))
        }</ul>
  ) */

  render() {
    const {inputValue, arrayOfItems} = this.state
    const numberOfItems = arrayOfItems.length
    console.log(numberOfItems)

    return (
      <div className="main-bg-container">
        <div className="display-char-container">
          <div className="header-container">
            <h1 className="heading">Count the characters like a Boss...</h1>
          </div>
          {numberOfItems > 0 ? (
            <ul className="item-container">
              {arrayOfItems.map(eachItem => (
                <CharLength key={eachItem.id} itemDetails={eachItem} />
              ))}
            </ul>
          ) : (
            this.displayNoUserInput()
          )}
        </div>
        <div className="input-container">
          <h1 className="heading-char-counter">Character Counter</h1>
          <div className="input-btn-container">
            <form>
              <input
                type="text"
                placeholder="Enter the Characters here"
                value={inputValue}
                onChange={this.onInputEnter}
                className="input-style"
              />
              <button type="button" className="button" onClick={this.addToList}>
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default CharacterCount
