import axios from "axios";
import React, { Component } from "react"
import { Link } from 'react-router-dom';



class Showcat extends Component {
    state = {
        img:""
    }

    render() {
        return (
            <React.Fragment>
                <div className="card" style={{width: "18rem" ,"margin":"auto"}}>
                    <img src={this.state.img} style={{"width":285, "height":250}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{"textAlign":"center"}}> <b>Name:</b> {this.props.name}</h5>
                        <div className="card-text">
                            <ul>
                                <div className="detail">
                                    <b>Age:</b> 2
                                </div>
                                <div className="detail">
                                    <b>Color:</b> white
                                </div>
                                <div className="detail">
                                    <b>Breed: </b> Persian
                                </div>
                                <div className="detail">
                                    <b>Origin: </b> Australia
                                </div>
                                <div className="detail">
                                    <b>Price: </b> 75000.00
                                </div>
                                <div className="detail">
                                    <b>Contact: </b> 9884667387
                                </div>
                                 
                            </ul> 
                        </div>      
                    </div>
                </div>
            </React.Fragment>
        )  
    }

    async componentDidMount() {
        console.log('app mounted'); 
        let {data} = await axios.get("https://api.thecatapi.com/v1/images/search");
        this.setState({img:data[0].url});
        console.log(data[0].url);
    }

}

export default Showcat;