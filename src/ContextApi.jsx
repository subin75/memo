import React, { createContext, useState } from 'react';
export const Mycontext = createContext();

const imgs = [

]

function ContextApi({children}) {
    const [data,setData] = useState([imgs]);
    const [todo,setTodo] = useState([]);

    const value = {
        data, setData,
        todo, setTodo
    }

  return (
    <Mycontext.Provider value={value}>
        {children}
    </Mycontext.Provider>
  )
}

export default ContextApi