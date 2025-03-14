import React from 'react'

function TodoList() {
  return (
    <div className="todolist">
        <h2>TodoList</h2>
        <p>할일 7개 남음</p>
        <div className='insert'>
            <form>
                <input tyoe="text"/>
                <button>저장</button>
            </form>
        </div>
        <ul className="list">
            <li>
                <input type="checkbox" checked={true}/>
                리액트 공부하기
                <button>삭제</button>
            </li>
        </ul>
    </div>
  )
}

export default TodoList