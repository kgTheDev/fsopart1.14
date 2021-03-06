//Imports React and State from library
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = (props) => (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )

const Display = ({selected, votes}) => {
    return (
        <>
        <div>{anecdotes[selected]}</div>
        <div>Has {votes[selected]} votes</div>
        </>
    )
}

const Stats = (props) => {
    let i = props.votes.indexOf(Math.max(...props.votes));
    return (
        <div>
        <h1>Anecdote with most votes</h1>
        <div>{anecdotes[i]}</div>
        <div>Has {props.votes[i]} votes</div>
        </div>
    )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array(6).fill(0))

  const randomize = (props) => {
  setSelected(Math.floor(Math.random() * anecdotes.length))
}

const voteFor = (selected) => {
  const copy = [...votes]
  copy[selected] += 1
  setVote(copy)
}

  return (
    <div>
    <Display selected={selected} votes={votes} />
    <p>
    <Button handleClick={() => voteFor(selected)} text="Vote" />
    <Button handleClick={() => randomize(anecdotes)} text='Next anecdote' />
    </p>
    <Stats votes={votes} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
