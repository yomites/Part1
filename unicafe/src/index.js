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
        <Statistic text="good" value={props.good} />
        <Statistic text="neutral" value={props.neutral} />
        <Statistic text="bad" value={props.bad} />
        <Statistic text="all" value={props.all} />
        <Statistic text="average" value={props.average} />
        <Statistic text="positive" value={props.positive} />
      </div>
    )
}

const Button = ({ handleClick, text }) => (
  <button onClick = {handleClick}>{text}</button>
)

const Statistic = (props) => {
  return (
    <div>
      {props.text} {props.value}
    </div>
  )
}

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