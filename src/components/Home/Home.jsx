import React from 'react'
import { Link } from 'react-router-dom'

const Home = (props) => {
  return (
    <>
        <div>
            <h1><Link to="/signup">SignUp</Link></h1>
            <br />
            <h1><Link to="/login">Login</Link></h1>
        </div>

        <br />
        <br />
        <br />
        <h2>{props.name?'welcome - ${props.name}':"Login Please"}</h2>
    </>
  )
}

export default Home