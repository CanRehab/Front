import React from 'react'
import './counter.css'

const Counter = () => {
  return (
    <div className='counter'>
    <p className='previous'> <a class="number">◀</a> </p>
    <p className='num1'> <a class="number" >1</a> </p>
    <p className='num2'><a class="number" >2</a> </p>
    <p className='num3'><a class="number" >3</a> </p>
    <p className='num4'><a class="number" >4</a> </p>
    <p className='num5'><a class="number" >5</a> </p>
    <p className='next'> <a class="number" >▶</a> </p>
</div>
  )
}

export default Counter
