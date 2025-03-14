import React from 'react'

function TodoList2() {
  return (
    <div className="todolist2">
      <h2>TodoList2</h2>
      <p>할일 7개 남음</p>
      <div className='insert'>
            <form>
                <input tyoe="text"/>
                <button>저장</button>
            </form>
      </div>
    </div>
  )
}

export default TodoList2