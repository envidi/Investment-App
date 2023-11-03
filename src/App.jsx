import { useState } from "react"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  const [data,setData] = useState({
    initialInvestment:0,
    annualInvestment:0,
    expectedReturn:0,
    duration:1
  })
  const isInputValid = data.duration >= 1
  const handleForm = (e) =>{
    const target = e.target
    const value = target.value
    const name = target.name


    setData((prev)=>{
        return {
            ...prev,
            [name]:+value
        }
    })    
     
   
  }
  return (
    <>
    <Header handleForm={handleForm}/>
   {isInputValid ? <Main data={data}/> :<p className="center">Please enter value duration greater than 0</p>}
    </>
  )
}

export default App
