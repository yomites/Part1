import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const HighestVoteIndex=(vote)=> {
  const copy = [ ...vote ]
  const index=copy.indexOf(Math.max(...copy))
  return (
    index
  ) 
}

const HighestVoteCount=(vote)=> {
  const copy = [ ...vote ]
  const highestCount = Math.max(...copy)
  console.log('Highest vote anecdote count',highestCount)
  return (
    highestCount
  )
}
const HighestVoteAnecdote=({anecdote})=> {
  console.log('Anecdote with highest vote:', anecdote)
  return (
    <div>
     {anecdote}
    </div>
  )    
}

const NumberCount = ({count})=> {
  console.log('This count',count)
  return (
    <div>
      has {count} votes
    </div>
  )
}

const VotesArray=(vote, index)=> {
  console.log(vote, index)
  const copy = [ ...vote ]
  copy[index] += 1
  return (
    copy
  )
}

const Button=({handleClick, text})=> (
    <button onClick={handleClick}>
      {text}
    </button>
)

const App = (props) => {

  const Anecdote = "Anecdote of the day"
  const Anecdote_Most_Votes = "Anecdote with most votes"

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array.apply
    (null, new Array(anecdotes.length))
    .map(Number.prototype.valueOf, 0))

  const setToSelected=()=>setSelected(
    Math.floor(Math.random() * anecdotes.length) + 0)
  console.log(selected)

  const setToVotes=()=>setVotes(VotesArray(votes, selected))
  console.log('The value of the array and index', votes, selected)

  return (
    <div>
      <h1>{Anecdote}</h1>
      <b>{props.anecdotes[selected]}</b><br />
      <NumberCount count={votes[selected]} />
      <Button handleClick={setToVotes} text="vote" />
      <Button handleClick={setToSelected} text="next anecdote" />
      <h1>{Anecdote_Most_Votes}</h1>
      <HighestVoteAnecdote anecdote={props.anecdotes[HighestVoteIndex(votes)]} />
      <NumberCount count={[HighestVoteCount(votes)]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
  'A primary cause of complexity is that software vendors uncritically adopt almost any feature that users want.',
  'Prolific programmers contribute to certain disaster.',
  'Design and programming are human activities; forget that and all is lost.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)