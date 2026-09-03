import React from 'react'
import {Link,NavLink} from 'react-router-dom'
function Header() {
    return (
        <>
        <div>
            <ul>
                <li><NavLink>Home</NavLink></li>
                <li><NavLink>GitHub data</NavLink></li>
                <li><NavLink>About</NavLink></li>
                <li><NavLink>Login</NavLink></li>
            </ul>
        </div>
        </>
    )
}

export default Header
