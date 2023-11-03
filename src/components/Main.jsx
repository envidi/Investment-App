import React from 'react'
import { calculateInvestmentResults } from '../util/investment.jsx'
import { formatter } from '../util/investment.jsx'

function Main({data}) {
    const {
        initialInvestment,
        annualInvestment,
        expectedReturn,
        duration,
    } = data
    const results = calculateInvestmentResults(
       { initialInvestment,
        annualInvestment,
        expectedReturn,
        duration}
        )
        // console.log(results)
  return (
    <table id='result'>       
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Invested Capital</th>
            </tr>
        </thead>
        <tbody>
            {
                results.map((result,index)=>{
                    const {
                        year,
                        interest,
                        valueEndOfYear,
                        totalInterest,
                        annualInvestment,
                        investCapital
                    } = result
                    return (
                        <tr key={index}>
                            <td>{year}</td>
                            <td>{formatter.format(valueEndOfYear)}</td>
                            <td>{formatter.format(interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(investCapital)}</td>
                        </tr>
                    )
                })
            }
           
        </tbody>
    </table>
  )
}

export default Main