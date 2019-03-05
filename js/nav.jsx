import React, { Component } from 'react';
import {
    NavLink,
} from "react-router-dom";

// Nav to komponent headera, tutaj znajduje się górne menu
class Nav extends React.Component {
    render(){
        return(
            <div>
                <header>
                    <span className="logo">StuffI<span className="own">OWN</span></span>
                    <ul className={"navigation__bar"}>
                        <li><NavLink to="/">Strona główna</NavLink></li>
                        <li><NavLink to="/collectors">Kolekcjonerzy</NavLink></li>
                        <li><NavLink to="/collections">Kolekcje</NavLink></li>
                        <li><NavLink to="/contact">Kontakt</NavLink></li>
                        <li><NavLink to="/insert">Wprowadź swoją kolekcję</NavLink></li>
                    </ul>
                </header>
            </div>
        )
    }
};

export default Nav;