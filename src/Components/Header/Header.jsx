import React from 'react'
import "./Header.css";
import { Link } from 'react-router-dom';
import logo from "../logo.svg"

export default function Header() {
    return (
        <header>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>

        </header>
    )
}
