import React from 'react'
import { AiOutlineLogin, AiOutlineBulb } from 'react-icons/ai'
import { MdAssignment } from 'react-icons/md'

const Nav = () => {
    return (
        <nav className="Nav">
                <div className="logo">
                    < AiOutlineBulb/>
                    CheetohMan98
                    < AiOutlineBulb />
                </div>
                <ul>
                    <li>
                        < MdAssignment size="1rem" className="icon"/>
                        <p>Join</p>
                    </li>
                    <li>
                    < AiOutlineLogin size="1rem" className="icon" />
                       <p> Login </p>
                    </li>
                </ul>
        </nav>
    )
}

export default Nav