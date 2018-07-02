import React, { Component } from 'react';
import './selector.scss';

export default class Selector extends Component {
  state = {
    selected: this.props.items[0],
    selectedClass: ''
  }

  handleSelection (event) {
    const value = event.target && event.target.value
    this.props.onSelect(value)
    this.setState({ selected: value })
  }

  render () {
    return (
      <form className="cp-selector">
        {this.props.items.map((item, index) => (
          <div key={index} className="cp-selector__label">
            <label className={this.state.selected === item ? 'cp-selector__checkmark' : ''}>
              <input
                type="radio"
                name="selector"
                value={item}
                checked={this.state.selected === item}
                onChange={this.handleSelection.bind(this)} />
                {item.toUpperCase()}
            </label>
          </div>
        ))}
      </form>
    )
  }
}
