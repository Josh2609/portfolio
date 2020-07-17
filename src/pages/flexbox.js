import React, { Component } from "react"
import "./flexbox.css"
import cs from "classnames"

class Page extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isActive: false,
    }
  }

  // var section = $('div.table__cell');

  // function toggleAccordion() {
  //   section.removeClass('active');
  //   $(this).addClass('active');
  // }

  // section.on('click', toggleAccordion);
  toggleAccordion(evt) {

  }

  render() {
    const { isActive } = this.state

    return (
      <div class="table">
        <div className='table__cell'>
          <span>A</span>
        </div>
        <div className={cs('table__cell',{ 'active': isActive })} onClick={()=> { this.setState({ isActive: !isActive }) }}>
          <span>B</span>
        </div>
      </div>
    )
  }
}

export default Page
