import React, { useState } from "react";


interface Todo {
    id:number;
    text: string;
    completed: boolean;
}

export const Todo:React.FC = () =>{
    const [todos, setTodos] = useState<Todo[]>([]);
    const [inputText, setInputText] = useState<string>('');

    const handleAddTodo = ()=>{
        if(inputText.trim() !== ''){
            const newTodo: Todo ={
                id: todos.length + 1,
                text: inputText,
                completed: false
            };

            setTodos([...todos, newTodo]);
            setInputText('');
        }
    }

    const handleInputChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setInputText(event?.target.value);
    }


    const handleDeleteTodo = (id:number) =>{
        const filteredTodos = todos.filter(todo => todo.id !== id);
        setTodos(filteredTodos);
    }

    const handleToggleTodo = (id:number) =>{
        const updatedTodos = todos.map(todo=>
             todo.id === id ? {...todo, completed: !todo.completed} 
                            : todo 
            );

            setTodos(updatedTodos);
    }

    return (
        <div>
            <h1>Todo App</h1>
            <input 
            type="text"
            placeholder="Enter todo ..."
            value={inputText}
            onChange={handleInputChange}
             />

            <button onClick={handleAddTodo}>Add Todo</button>

            <ul>
                {
                    todos.map(todo => (
                        <li>
                            <span
                            style={{textDecoration:todo.completed?'line-through':'none'}}
                            >{todo.text}</span>
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={()=> handleToggleTodo(todo.id)}
                             />
                             <button onClick={()=>handleDeleteTodo(todo.id)}>Delete</button>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}