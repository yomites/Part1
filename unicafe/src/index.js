import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display=({text, value})=><div>{text} {value}</div>

const App = () => {
  const feedback="give feedback"
  const statistics="statistics"
  // save clicks of each button to own state
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
  console.log(positive + " %")
  const positiveWithPercentSign = positive + " %"
  console.log(good, neutral, bad)
  
  return (
    <div>
      <h1>{feedback}</h1>
      <button onClick={setToGood}>
        good
      </button>
      <button onClick={setToNeutral}>
        neutral
      </button>
      <button onClick={setToBad}>
        bad
      </button>
      <h2>{statistics}</h2>
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <Display text='all' value={all} />
      <Display text='average' value={average} />
      <Display text='positive' value={positiveWithPercentSign} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)