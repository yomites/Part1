import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
        <h1>
          {props.name}
        </h1>
    </div>
  )
}

const Part = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        {props.part_and_exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part_and_exercises = {props.Part1} />
      <Part part_and_exercises = {props.Part2} />
      <Part part_and_exercises = {props.Part3} />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Number of exercises {props.sum_of_exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header name = {course} />
      <Content Part1={part1 + " " + exercises1}
        Part2={part2 + " " + exercises2}
        Part3={part3 + " " + exercises3} />
      <Total sum_of_exercises={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))