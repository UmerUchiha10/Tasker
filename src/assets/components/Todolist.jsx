import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const Todolist = ({todo, todos, handleAdd,handleCheckbox,handleChange,handleEdit,handleDelete,showfinished,togglefinished}) => {
return (
<div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-red-100 min-h-[80vh] md:w-[35%]">
    <h1 className='text-center font-bold text-3xl'>Tasker! Complete Instantly</h1>
    <div className="addtodo my-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Add Todo</h2>
        <div className="flex">
        <input type="text" className="w-full rounded-full p-2" onChange={handleChange} value={todo} />
        <button onClick={handleAdd} disabled={todo.length<3}
            className="bg-red-800 disabled:bg-red-700 hover:bg-red-950 p-4 py-2 text-sm font-bold text-white rounded-full mx-2">
            Add
        </button>
        </div>
       
    </div>
    <input type="checkbox" onChange={togglefinished} checked={showfinished} className='my-4 mx-2'/> Show Finished
    <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'>

    </div>
    <h2 className="text-2xl font-bold">Your Todos</h2>
    <div className="todos">
        {todos.length === 0 && <div className='m-5'>No todo to display</div>}
        {todos.map((item) => (
        (showfinished || !item.iscompleted ) && <div className="todo flex justify-between my-3" key={item.id}>
            <div className='flex gap-5'>
                <input onChange={()=> handleCheckbox(item.id)}
                type="checkbox"
                checked={item.iscompleted} // Check if todo is completed
                />
                <div className={item.iscompleted ? 'line-through' : '' }>
                    {item.todo}
                </div>
            </div>

            <div className="buttons flex h-full">
                <button onClick={(e)=> handleEdit(e,item.id)}
                    className="bg-red-800 hover:bg-red-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
                    <CiEdit />
                </button>
                <button onClick={(e)=> handleDelete(e, item.id)}
                    className="bg-red-800 hover:bg-red-950 p-2 py-1 text-sm font-bold text-white rounded-md mx-1"
                    >
               <MdDelete />
                </button>
            </div>
        </div>
        ))}
    </div>
</div>
)
}

export default Todolist
