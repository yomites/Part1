import React, { useState } from 'react'
import ReactDOM from 'react-dom'

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
        good {good}<br />
        neutral {neutral}<br />
        bad {bad}  
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)