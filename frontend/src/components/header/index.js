import React from 'react'
import * as Styled from "./style";
import { NavLink, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
    const navigate = useNavigate()
    const location = useLocation()
    const handelBack = (path) => {
        if (path === "/login") {
            navigate("/")
        } else {
            localStorage.removeItem("token");
            navigate("/login")
        }
    }
    const iconFunction = () => {
        if (location?.pathname === "/login") {
            return <i class="fa fa-arrow-circle-left" Styled={{ fontSize: "24px", marginTop: "10px" }} onClick={() => handelBack(location?.pathname)}></i>
        } else if (location?.pathname === "/maintenance-requests-list") {
            return <span className='logoutBtn' onClick={() => handelBack(location?.pathname)}>Logout</span>
        }
    }
    return (
        <>
            <Styled.NavBar>
                <div>{iconFunction()}
                </div>
                {location?.pathname != "/maintenance-requests-list" && <NavLink
                    to="/login"
                    className="navLink"
                >
                    Login
                </NavLink>}
            </Styled.NavBar >
        </>
    )
}
