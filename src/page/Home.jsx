import React, { useContext } from 'react'
import { Mycontext } from '../ContextApi'

function Home() {
    const {data,setData} = useContext(Mycontext);

    console.log(data)
    return (
    <div>
        App => 라우팅, Contextapi(부모) 자식(Home,Swiper)관계 성립<br/><br/>
        ContextApi => 전역상태관리를 위한 컴포넌트(데이터를 처리함)<br/><br/>
        Mycontext => 전역상태값을 정의<br/><br/>
        Home / Swiper => 부모의 전역값을 받아 사용할 수 있음
    </div>
    )
}

export default Home