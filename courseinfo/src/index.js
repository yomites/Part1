import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <div>
        <h1>
          {props.course}
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
  console.log(props)
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
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header course = {course} />
      <Content 
        Part1={part1.name + " " + part1.exercises}
        Part2={part2.name + " " + part2.exercises}
        Part3={part3.name + " " + part3.exercises} />
      <Total sum_of_exercises={part1.exercises + 
        part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))