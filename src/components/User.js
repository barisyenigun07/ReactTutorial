import React, { Component } from 'react'
import PropTypes from 'prop-types'

class User extends Component {
  state = {
    isVisible : false
  }
  static defaultProps = {
    name : "Bilgi Yok",
    salary : "Bilgi Yok",
    department : "Bilgi Yok"
  }

  onClickEvent(event){
    console.log(this);
  }

  constructor(props){
    super(props);

      this.state = {
        isVisible : false
      }
  }
  render() {
    //Destructing
    const {name,department,salary} = this.props;
    const {isVisible} = this.state;
    
    return (
      <div className='col-md-8 mb-4'>
        <div className='card'>
          <div className='card-header d-flex justify-content-between'>
            <h4 className='d-inline' onClick={this.onClickEvent()}>{name}</h4>
            <i className='far fa-trash-alt' style = {{cursor : "pointer"}}></i>
          </div>
          {
            isVisible ? <div className='card-body'>
            <p className='card-text'>Maaş : {salary}</p>
            <p className='card-text'>Departman: {department}</p>
            </div>
            : null
          }
          
      
        </div>
      </div>
    )
  }
}

export default User;