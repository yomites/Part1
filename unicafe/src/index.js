import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics=(props)=> {
  if (props.all === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }

    return (
      <div>
        good {props.good} <br />
        neutral {props.neutral} <br />
        bad {props.bad} <br />
        all {props.all} <br />
        average {props.average} <br />
        positive {props.positive} <br />
      </div>
    )
}

const Button = ({ handleClick, text }) => (
  <button onClick = {handleClick}>{text}</button>
)

const App = () => {

  const feedback="give feedback"
  const statistics="statistics"

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setToGood=()=>setGood(good + 1)
  const setToNeutral=()=>setNeutral(neutral + 1)
  const setToBad=()=>setBad(bad + 1)

  const all = good + neutral + bad
  const feedbackValues = (good * 1) + (neutral * 0) + (bad * -1)
  const average = feedbackValues / all
  const positive = (good * 100 / all)
  const positiveWithPercentSign = positive + " %"
  console.log(positive + " %")
  console.log(good, neutral, bad)
  
  return (
    <div>
      <h1>{feedback}</h1>
      <Button handleClick={setToGood} text="good" />
      <Button handleClick={setToNeutral} text="neutral" />
      <Button handleClick={setToBad} text="bad" />
      <h2>{statistics}</h2>
      <Statistics 
        good={good} 
        neutral={neutral} 
        bad={bad} 
        all={all} 
        average={average} 
        positive={positiveWithPercentSign} 
      />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)