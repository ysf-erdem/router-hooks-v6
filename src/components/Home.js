import React from 'react'
import './components.css';
import { useNavigate } from "react-router-dom";

const Home=()=> {
const navigate = useNavigate();    
    return (
    <div className='text'>
      This is the "Home" page.
      <div>
        <button onClick={()=>navigate(-1)}> Go back</button>
        <button onClick={()=>navigate(+1)}>  Go forward</button>
      </div>
    </div>
  )
}
export default Home;