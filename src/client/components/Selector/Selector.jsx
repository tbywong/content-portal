import React, { Component } from 'react';
import './selector.scss';

export default class Selector extends Component {
  state = {
    selected: this.props.items[0]
  }

  handleSelection (event) {
    const value = event.target && event.target.value

    this.props.onSelect(value)
    this.setState({ selected: value })
  }

  render() {
    return (
      <form>
        {this.props.items.map((item, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="selector"
                value={item}
                checked={this.state.selected === item}
                onChange={this.handleSelection.bind(this)} />
                {item}
            </label>
          </div>
        ))}
      </form>
    )
  }
}
