import React, {Component, Suspense} from 'react';
import logo from "../../Img/logo.png"
import "./Header.css"

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Home from "../Home";
import {Route, Switch} from "react-router-dom";


export default class Header extends Component {
    render() {

        return (
            <header>
                <Navbar className="header " collapseOnSelect expand="lg" style={{
                    marginRight: "150px"
                }}>
                    <Navbar.Brand className="logo" href="/mainsearch/" style={{
                        marginRight: "200px"
                    }}>
                        <img className="logo-img"
                             src={logo}
                             height="auto"
                             width="50"
                             alt="logo"
                        />{' '}ПОШУКОВА ПЛАТФОРМА ПО ВОЛНОВАСІ
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-toggle" style={{
                        marginLeft: "70%",
                        color: "#FFD947",
                        border: "5px solid #FFD947"
                    }}/>

                    <Navbar.Collapse id="nav-item-child">
                        <Nav className="mr-auto"/>
                        <Nav className="test" style={{
                            marginRight: "100px",
                            color: "#FFD947"
                        }}>
                            <Nav.Link href="/mainsearch">Головна</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <Suspense fallback={<div>Завантаження...</div>}>
                    <Switch>
                        <Route excat path="/" component={Home}/>
                        <Route excat path="/mainsearch" component={Home}/>
                    </Switch>
                </Suspense>

            </header>


        );
    }
}
