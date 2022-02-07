import React, { Component } from 'react';
import './Components.css';

class Components extends Component { 

  toggleController() {
    let controller = document.querySelector(".controller");
    let toggle = document.querySelector(".controller .toggle");
    toggle.classList.toggle("is-active");
    controller.classList.toggle("is-active");
  }

  render() {
    return (<>
      <div>Components</div>
      <div className="controller">
          <dl>
            <dt></dt>
            <dd>
              <label className="color-default">
                <span className="txt">default</span>
                <input type="color" />
              </label>
              <label className="color-hover">
                <span className="txt">hover</span>
                <input type="color" />
              </label>
              <label className="color-border">
                <span className="txt">border</span>
                <input type="color" />
              </label>
            </dd>
          </dl>
          <div className="toggle" onClick={this.toggleController}></div>
        </div>
    </>
    )
  }
}

export default Components;