import React from "react";
import { useState } from "react";


const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  const [ selected,setSelected] = useState(0)
  const [ votes,setVotes] = useState({0:0,1:0,2:0,3:0,4:0,5:0,6:0})
  const [ max_votes,setMaxVotes] = useState({id:0,votes:0})

  
  const increaseVote = (idAnecdote) => {
  var copyPoints= {...votes}
  copyPoints[idAnecdote] +=1
  if(copyPoints[idAnecdote] > max_votes['votes']){
    console.log("comparison")
    var copyMax = {id:idAnecdote,votes:copyPoints[idAnecdote]}
    
    setMaxVotes(copyMax)
  }
  setVotes(copyPoints)
 
  }

  const nextAnecdote = () =>{
    setSelected(Math.floor(Math.random() * 7))
  }

  return (
    <div>
    <h1>anecdote of the day</h1>
      { anecdotes[selected] }
     <p> has {votes[selected]} votes </p>
      <p>
        <button onClick={()=>increaseVote(selected)}> vote </button>
        <button onClick={nextAnecdote}>next anecdote</button>
      </p>
      <h1>anecdote with the most votes</h1>
      {anecdotes[max_votes['id']] } has {max_votes['votes']}
    </div>
  )
}


export default App
