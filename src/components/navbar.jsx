import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { FaPlusCircle } from 'react-icons/fa';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <a className="navbar-brand" style={{"marginLeft":10}}>Adopt-A-Cat</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">                    
                            <Link to={`/home`} style={{"marginRight":10, "width":80, "color":"white", "textDecoration":"none"}}>
                                Home
                            </Link>                    
                        </li>
                        <li className="nav-item">                    
                            <Link to={`/about`} style={{"marginRight":10, "width":100, "color":"white", "textDecoration":"none"}}>
                                About us
                            </Link>                                    
                        </li>
                        <li className="nav-item" style={{"marginRight":640}}>                
                            <Link to={`/contact`} style={{"color":"white", "textDecoration":"none"}}>
                                contact
                            </Link>                                       
                        </li>
                    </ul>
                    <a className="btn btn-outline-primary" href="add-cat" style={{"width":120, "marginRight":10}}>Add cat <FaPlusCircle/></a>
                    <input className="form-control mr-sm-2" type="search" style={{"width":200,"marginRight":10}} placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </div>
            </nav>
        )
    }
}

export default Navbar;