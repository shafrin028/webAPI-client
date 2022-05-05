import axios from "axios";
import React, { Component } from "react"
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa';


class Cat extends Component {
    state = {
        img:""
    }

    render() {
        return (
            <React.Fragment>
                <div className="card" style={{width: "18rem"}}>
                    <img src={this.state.img} style={{"width":285, "height":250}} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title" style={{"textAlign":"center"}}> <b>Name:</b> {this.props.name}</h5>
                        <div className="card-text">
                            <ul>
                                <div className="detail">
                                    <b>Age:</b> {this.props.age}
                                </div>
                                <div className="detail">
                                    <b>Color:</b> {this.props.color}
                                </div>
                                <div className="detail">
                                    <b>Breed: </b> {this.props.breed}
                                </div>
                                 
                            </ul> 
                        </div>
                        <div style={{"textAlign":"center"}}>
                            <button className="btn btn-outline-primary">
                                <Link to={`/show-cat/${this.props.id}`} style={{"textDecoration":"none"}}>
                                    View{" "}
                                </Link>
                                
                                <FaEye/>
                            </button>{" "}
                            <button className="btn btn-outline-danger" onClick={this.props.onDelete}>Delete <FaTrash/></button> 
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

export default Cat;