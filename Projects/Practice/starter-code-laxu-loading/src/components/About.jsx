import React, { useState } from 'react'
import { todos } from '../data'

export default function About() {
  const [todosList, setTodosList] = useState([])
  return (
    <>
      <h1 className="text-xl">We are ProCodrrs</h1>
      <button onClick={() => {
        import('../data').then((module) => {
          setTodosList(module.todos)
        })
      }}>load data</button>
      <ul>
        {todosList.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  )
}
