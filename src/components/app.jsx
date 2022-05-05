import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from "./navbar";
import About from "./about";
import Cats from "./cats";
import Contact from "./contact";
import Addcat from "./addCat";
import Showcat from "./showCat";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="app">
                    <Navbar/>
                    <div className="content" style={{"marginTop":70}}>
                        <Switch>
                            <Route
                                exact path="/" >
                            <Cats/>
                            </Route> 
                            <Route path="/about">
                                <About/>
                            </Route>
                            <Route path="/home">
                                <Cats/>
                            </Route>
                            <Route path="/contact">
                                <Contact/>
                            </Route> 
                            <Route path="/add-cat">
                                <Addcat/>
                            </Route> 
                            <Route path="/show-cat/:catId">
                                <Showcat/>
                            </Route> 
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;