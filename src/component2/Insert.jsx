import React, { useContext } from 'react'
import { Mycontext } from '../ContextApi'

function Insert() {
    const {todo,setTodo} = useContext(Mycontext);

    function save(e){
        e.preventDafault();
        const d = {
            id:Date.now(),
            todo:e.targer.todo.value
        }
        setTodo([...todo, e.target.todo.value])
    }

    console.log (todo);

  return (
    <div className='insert'>
        <form onSubmit={save}>
            <input type="text" name="todo"/>
            <button>저장</button>
        </form>
    </div>
  )
}

export default Insert