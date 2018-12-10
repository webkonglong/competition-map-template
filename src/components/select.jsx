
import React from 'react'
import { any, func, arrayOf, string } from 'prop-types'
import Component from '@/Component'


class Select extends Component {
  static propTypes = {
    getOptionText: func.isRequired,
    change: func.isRequired,
    list: arrayOf(any).isRequired,
    defaultValue: string.isRequired
  }

  state = {
    value: this.props.defaultValue
  }

  change (e) {
    const { value } = e.target
    this.props.change(value)
  }

  render() {
    const { list, getOptionText, defaultValue } = this.props
    return (
      <select className="c-select" onChange={this.change.bind(this)}>
        <option disabled="disabled" vlaue="">{defaultValue}</option>
        {list.map((item, i) => (
          <option key={i} value={item}>{getOptionText(item)}</option>
        ))}
      </select>
    )
  }
}

export default Select
