import React, { useState,useEffect } from 'react';

import { v4 as uuidv4 } from 'uuid'; 
import Navbar from './Navbar';
import Todolist from './Todolist';

const Home = () => {
const [todo, setTodo] = useState('');
const [todos, setTodos] = useState([]);
const [showfinished, setshowfinished] = useState(true)


useEffect(() => {
let todostring = localStorage.getItem("todos")

if(todostring){

let todos = JSON.parse(localStorage.getItem("todos"))
setTodos(todos)

}
}, [])




const savetoLS = () => {
localStorage.setItem("todos",JSON.stringify(todos))
}


const handleEdit = (e, id) => {
// Implement edit functionality here
let t = todos.find(i => i.id === id); // Use find instead of filter
setTodo(t.todo);
let newtodos = todos.filter(item => item.id !== id);
setTodos(newtodos);
savetoLS(); // Call savetoLS after updating state
};


const togglefinished = (e) => {
setshowfinished(!showfinished)
}


const handleDelete = (e, id) => {
// Implement delete functionality here
let newtodos = todos.filter(item => item.id !== id);
setTodos(newtodos);
savetoLS(); // Call savetoLS after updating state
};

const handleAdd = () => {
if (todo.trim() !== '') {
setTodos([...todos, { id: uuidv4(), todo, iscompleted: false }]);
setTodo(''); // Clear input after adding todo
savetoLS(); // Call savetoLS after updating state
}
};

const handleCheckbox = (id) => {
setTodos(
todos.map((item) =>
item.id === id ? { ...item, iscompleted: !item.iscompleted } : item
)
);
savetoLS(); // Call savetoLS after updating state
};




const handleChange = (e) => {
setTodo(e.target.value);
};

return (
<>

    <Navbar/>
    <Todolist todo={todo} todos={todos} handleAdd={handleAdd} handleEdit={handleEdit} handleDelete={handleDelete}
        handleChange={handleChange} handleCheckbox={handleCheckbox} showfinished={showfinished}
        togglefinished={togglefinished} />

</>
)
}

export default Home
