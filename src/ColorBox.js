import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
      
    ]
  }

  render() {
    let opacity = this.props.opacity 
    if (opacity >= 0.2) {
      return (
        <div className="color-box" style={{opacity:opacity}}>
          {<ColorBox opacity={this.props.opacity - 0.1} />}
        </div>
      )
    }
    else return(
      null

    )
 
  }

}

