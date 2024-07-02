import React from 'react'
import All from './All'
import { Link, NavLink } from "react-router-dom";

export default function Navbar(){
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",                
      };
    
    return(
        <nav class="navbar">
        <div class="navbar-brand">
            <Link to="/">Healtho</Link>
        </div>
        
        <div class="navbar-menu" id="navbar-menu">
            <NavLink to="/"
            style={({ isActive }) => (isActive ? activeStyles : null)}
            >Home</NavLink>
            <NavLink to='All'
            style={({ isActive }) => (isActive ? activeStyles : null)}
            >All</NavLink>                        
        </div>
    </nav>
    )
}