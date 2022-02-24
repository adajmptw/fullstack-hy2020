import React from "react";
import { useState } from "react";


const StatisticsLine = (props) => {
 
  return(
    <td>{props.text} {props.value}</td>
  )
}


const Statistics = ({ good, neutral, bad, all }) => {
  if (all != 0) {
    return (
      <div>
        <h1>statistics</h1>
        <table>
          <tbody>

           <tr><StatisticsLine text="good" value={good} /></tr>
           <tr><StatisticsLine text="neutral" value={neutral} /></tr>
           <tr><StatisticsLine text="bad" value={bad} /></tr>
           <tr><StatisticsLine text="all" value={all} /></tr>
           <tr><StatisticsLine text="average" value={(good * 1 + (bad * -1)) / all} /></tr>
           <tr><StatisticsLine text="positive" value={good / all * 100}  /></tr>
          </tbody>
        </table>
      </div>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1>
        <p>No statistics given</p>
      </div>
    )
  }
}

const Button = (props) => {
  return(
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}


const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const increaseGoodByOne = () => {
    setGood(good + 1)
    setAll(all + 1)
  }

  const increaseBadByOne = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  const increaseNeutralByOne = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }



  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increaseGoodByOne} text="good" />
      <Button onClick={increaseNeutralByOne} text="neutral" />
      <Button onClick={increaseBadByOne} text="bad" />
      <Statistics good={good} bad={bad} neutral={neutral} all={all} />
    </div>
  )
}





export default App