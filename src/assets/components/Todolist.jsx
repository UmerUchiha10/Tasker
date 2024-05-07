import React from 'react'
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

const Todolist = ({todo, todos,
handleAdd,handleCheckbox,handleChange,handleEdit,handleDelete,showfinished,togglefinished}) => {
return (
<div className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-red-100 min-h-[80vh] md:w-[35%]">
    <h1 className='text-center font-bold text-3xl'>Tasker! Complete Instantly</h1>
    <div className="addtodo my-5 flex flex-col gap-4">
        <h2 className="text-2xl font-bold">Add Todo</h2>
        <div className="flex">
            <input type="text" className="w-full rounded-full p-2" onChange={handleChange} value={todo} />
            

            <button onClick={handleAdd} disabled={todo.length<3}
                className="overflow-hidden  w-32 p-2 mx-2 h-12 bg-black text-white border-none rounded-lg text-xl font-bold cursor-pointer relative z-10 group">
                Add!
                <span
                    className="absolute w-36 h-32 -top-8 -left-2 bg-red-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"></span>
                <span
                    className="absolute w-36 h-32 -top-8 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"></span>
                <span
                    className="absolute w-36 h-32 -top-8 -left-2 bg-red-600 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"></span>
                <span
                    className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10">Save!</span>
            </button>

        </div>

    </div>
    <input type="checkbox" onChange={togglefinished} checked={showfinished} className='my-4 mx-2' /> Show Finished
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

            <div className="buttons flex h-full gap-2">


                <button onClick={(e)=> handleEdit(e,item.id)}
                    className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
                    <span
                        className="bg-red-400 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
                    Edit
                </button>

                <button onClick={(e)=> handleDelete(e, item.id)}
                    className="inline-flex items-center px-4 py-2 bg-red-600 transition ease-in-out delay-75 hover:bg-red-700 text-white text-sm font-medium rounded-md hover:-translate-y-1 hover:scale-110">
                    <svg stroke="currentColor" viewBox="0 0 24 24" fill="none" class="h-5 w-5 mr-2"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            stroke-width="2" stroke-linejoin="round" stroke-linecap="round"></path>
                    </svg>

                    Delete
                </button>



            </div>
        </div>
        ))}
    </div>
</div>
)
}

export default Todolist
