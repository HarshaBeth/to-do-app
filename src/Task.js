import React, { useEffect, useState } from 'react'

function Task({index, name, onDelete, onUpdate}) {

    const [completed, setCompleted] = useState(false);

    const handleDelete = () => {
        onDelete(index);
    }

    const handleUpdate = () => {
        onUpdate(index);
    }

    const completeItem = () => {
        setCompleted(!completed);
    } 
    

  return (
    <div className={`w-96 py-2 px-3 border border-gray-300 rounded-lg bg-gray-100 flex flex-row justify-between items-center
                    ${completed ? 'bg-green-400': ''}`} >
      
        <div className='font-mono w-[60%]'>
            <span>{index+1}.</span>
            <span className={`font-mono uppercase ${completed ? 'line-through text-gray-500' : ''}`}>{name}</span>
        </div>

        <div className='flex flex-row gap-1'>
            <button className='bg-yellow-500 hover:bg-yellow-700 text-white rounded-full py-1 px-2.5 font-mono text-xl' onClick={handleUpdate}>
                ↻
            </button>

            <button className='bg-green-500 hover:bg-green-700 text-white rounded-full py-1 px-2.5 font-mono text-xl' onClick={completeItem}>
                ✔
            </button>

            <button className='bg-red-500 hover:bg-red-700 text-white rounded-full py-1 px-3 font-mono text-xl' onClick={handleDelete}>
                X
            </button>
        </div>

      
    </div>
  )
}

export default Task
