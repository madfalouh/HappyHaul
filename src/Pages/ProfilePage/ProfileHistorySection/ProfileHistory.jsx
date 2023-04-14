import React from 'react'
import './profileHistory.css'

function ProfileHistory( ) {
  return (
    <div  className='history-section'  >
       
     <div className='title-section' >
      <h1>Hi ,  Mohamed Reda </h1>
       <p>Thanks for beign our customer for 3 years</p>
      </div>

     <div className='option-section' >
      <h5>Orders</h5>
       <ul>
         <li>Order History</li>
         <li>Digital Orders</li>
         </ul>
      </div>
    

     <div className='option-section' >
      <h5>Manage Account</h5>
       <ul>
         <li>Account Setting</li>
         <li>Address Book</li>
         <li>Payment Options</li>
         </ul>
      </div>
    </div>
  )
}

export default ProfileHistory
