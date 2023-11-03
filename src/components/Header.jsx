import React from 'react'
import img from '../assets/investment-calculator-logo.png'
import { useState } from 'react'

function Header({handleForm}) {
    
   
  return (
    <div id='header'>
        <img src={img} alt="" />
        <h1>Investment Calculator</h1>
        <div id="user-input">
            <div className="input-group">
               <div>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number" name='initialInvestment' onChange={handleForm}/>   
                </div>                                    
                <div>
                    <label htmlFor="">Annual Investement</label>
                    <input type="number" name='annualInvestment' onChange={handleForm} />     
                </div>          
            </div>
            <div className="input-group">
               <div>
                <label htmlFor="">Expected Return</label>
                    <input type="number" name='expectedReturn' onChange={handleForm} />   
                </div>                                    
              <div>
              <label htmlFor="">Duration</label>
                <input type="number" name='duration' onChange={handleForm} />     
                </div>          
            </div>
           
        </div>
    </div>
  )
}

export default Header