import React, { Component } from 'react'
import loading from './loading.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className='text-center'>
        <img className='my-3' style={{height: '25px', width: '25px'}} src={loading} alt='' />
      </div>
    )
  }
}

export default Spinner
