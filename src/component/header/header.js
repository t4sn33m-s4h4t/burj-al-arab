import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div style={{backgroundColor:'cyan', paddingTop:'50px', paddingBottom:'50px'}}>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/books'>Books</Link>
        </div>
    )
}
