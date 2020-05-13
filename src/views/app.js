import React, { useState, useEffect } from "react"

let maxId = 10
const nextId = () => maxId++

const TodoItem = ({ todo, onToggleDone }) => {
    return (
        <p>
            <span className="px-2">{todo.id}</span>
            <span className="px-2">{todo.text}</span>
            <input
                className="px-2"
                type="checkbox"
                checked={todo.isDone}
                onChange={() => onToggleDone(todo)}
            />
        </p>
    )
}

const TodoInput = ({ onAddTodo }) => {
    const [text, setText] = useState("")

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onClick = (e) => {
        const todo = { id: nextId(), text: text, isDone: false }
        onAddTodo(todo)
        return false
    }

    return (
        <div>
            <input type="text" value={text} onChange={onChange} />
            <button onClick={onClick}>Add</button>
        </div>
    )
}

const Todos = ({ todos, onToggleDone, onAddTodo }) => {
    useEffect(() => {
        console.log("execute")
        window.document.title = todos.length

        return () => console.log("cleanup")
    }, [todos])

    return (
        <div>
            <h2>The list of things you should do</h2>
            <TodoInput onAddTodo={onAddTodo} />

            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    onToggleDone={onToggleDone}
                />
            ))}
        </div>
    )
}

const App = (props) => {
    const initialTodos = [
        { id: 1, text: "Todo A", isDone: true },
        { id: 2, text: "Todo B", isDone: true },
        { id: 3, text: "Todo C", isDone: false },
    ]

    const [todos, setTodos] = useState(initialTodos)

    const onToggleDone = (todo) => {
        todo.isDone = !todo.isDone
        setTodos([...todos])
    }

    const onAddTodo = (todo) => {
        setTodos([...todos, todo])
    }

    return (
        <div>
            <h1>Hello {props.name}!</h1>
            <Todos
                todos={todos}
                onToggleDone={onToggleDone}
                onAddTodo={onAddTodo}
            />
        </div>
    )
}

export default App
