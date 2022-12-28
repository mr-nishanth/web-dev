import React, { useEffect, useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState([])
  const [todoHeading, setTodoHeading] = useState("")
  const [email, setEmail] = useState("")

  // const handleChange = (e) => {
  //   //   setUser((prev) => {
  //   //     const addUser = { ...prev, [e.target.name]: e.target.value }
  //   //     console.log(addUser)
  //   //     return addUser;
  //   // });

  //   // setTodo((prev) => {
  //   //   const newTodo = { ...prev, [e.target.name]: e.target.value }
  //   //   return newTodo;
  //   // })

  //   setTodo(prev => ({ ...prev, [e.target.name]: e.target.value }))
  // }

  // useEffect(() => {
  //   console.log(todo)
  // }, [todo])

  // const addTodo = () => {

  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    // addTodo()
    setTodos([...todos, { email: email, todoHeading: todoHeading }])

  }


  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          name="todo"
          id="todo"
          placeholder='Todo'
          onChange={e => setTodoHeading(e.target.value)}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {todos.map((todo, index) => {
          return (
            <div key={crypto.randomUUID()}>
              {todo.todoHeading}
              {todo.email}
            </div>
          )
        })}
      </div>

    </div>
  )
}
