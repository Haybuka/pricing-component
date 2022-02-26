import React from 'react'
import './Card.css'
function Card({type,amount,details}) {
  return (
    <section className={ type==="Professional" ? 'Card h-96 text-white lg:my-0' : 'Card text-secondary-400 bg-white lg:my-0'}>
         <h3 className='font-bold text-center'>{type}</h3>
         <p className='amount'> <span className='text-xl mr-2'>$</span> {amount}</p>
         <ul className='text-center mb-5'>
             <li className='list-item'> 1 TB Storage</li>
             <li className='list-item'> 5 Users Allowed</li>
             <li className='list-item'> Send up to 10GB</li>
         </ul>
         <button 
            className={type === 'Professional' ? 
            'btn-dark hover:bg-transparent hover:text-white' 
            : 'btn-light hover:text-secondary-500'}> learn More</button>
    </section>
  )
}

export default Card
