import React from "react";

const Course = ({ course }) => {
    let sum =course.parts.reduce(
      (p,s)=>(p+s.exercises),0
   )
 
   return (
     <div>
       <h1>{course.name}</h1>
 
       { course.parts.map((part) =>
         <p key={part.id}>{part.name} {part.exercises}</p>
         )
       }
      
       <p>total of {sum} exercises</p>
     </div>
   )
 }

 export default Course