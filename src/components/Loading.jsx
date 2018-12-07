import React from 'react'
import Component from '@/Component'
import PropTypes from 'prop-types'

class Loading extends Component {
  static propTypes = {
    isMap: PropTypes.bool
  }

  static defaultProps = {
    isMap: false
  }

  render () {
    const { isMap } = this.props
    return (
      <React.Fragment>
        {isMap && <div className="c-spinner-container">
          <div className="c-sk-cube-grid">
            {[...Array(9)].map((item, index) => (
              <div key={index} className={`sk-cube sk-cube${index + 1}`} />
            ))}
          </div>
          <div className="c-spinner-text"> Crypto Meetup is loading... </div>
        </div>}
      </React.Fragment>
    )
  }
}

export default Loading
