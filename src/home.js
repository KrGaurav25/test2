import { Button } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import React from 'react';
export default function Home() {
    
    return (
        <>
            <div className='nav-style'>
                <NavLink className="link-style" to='/Home'>Home</NavLink>
                <NavLink className="link-style" to='/Login'>Login</NavLink>
                <NavLink className="link-style" to='/Signup'>Sign Up</NavLink>
            </div>
            <h1>This is Home Page</h1>
            
        </>
    )
}