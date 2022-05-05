import axios from 'axios';
import React, {useState} from "react";
import "../css/app.css"

const App = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [color, setColor] = useState("");
    const [sex, setSex] = useState("");
    const [breed, setBreed] = useState("");
    const [origin, setOrigin] = useState("");
    const [locationUrl, setLocationUrl] = useState("");
    const [price, setPrice] = useState("");
    const [ownerName, setOwner] = useState("");
    const [contact, setContact] = useState("");

    const data = {
        name: name,
        age: age,
        color: color,
        sex: sex,
        breed: breed,
        origin: origin,
        locationUrl: locationUrl,
        price: price,
        ownerName: ownerName,
        contact: contact,
        
      };
    
    const addcat = () => {
        axios
        .post('http://localhost:5000/api/cats', data)
        .then(res => {
          this.setState({
            name: '',
            age: '',
            color: '',
            sex: '',
            breed: '',
            origin: '',
            locationUrl: '',
            price: '',
            ownerName: '',
            contact: '',
          })
        })
        .catch(err => {
          console.log("Error in Create cat!");
        })
    }

    return (
      <div style={{"width":1000, "margin":"auto", "textAlign":"center", "justifyContent":"center"}}>
        <form>
            <div className="container">
                <h2 className='center'>ADD CAT</h2>
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        {/* <label className=".float-left">First name</label>  */}
                        <input type="text" className= "form-control" value={name} placeholder="Name" onChange={(e) => {
                                setName(e.target.value);
                            }} required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="number" className= "form-control" value={age} placeholder="Age" onChange={(e) => {
                                setAge(e.target.value);
                            }} required/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={color} placeholder="Color" onChange={(e) => {
                                setColor(e.target.value);
                            }} required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={sex} placeholder="Sex" onChange={(e) => {
                                setSex(e.target.value);
                            }} required/>
                        </div> 
                    </div>
                </div><div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={breed} placeholder="Breed" onChange={(e) => {
                                setBreed(e.target.value);
                            }} required/>
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={origin} placeholder="Origin" onChange={(e) => {
                                setOrigin(e.target.value);
                            }} />
                        </div> 
                    </div>
                </div><div className="row">
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" className= "form-control" value={locationUrl} placeholder="Location URL" onChange={(e) => {
                                setLocationUrl(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className="col-md-6">
                    <div className="form-group">
                        <input type="number" className= "form-control" value={price} placeholder="Price" onChange={(e) => {
                                setPrice(e.target.value);
                            }} required/>
                        </div>
                    </div>
                </div><div className="row">
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="text" className= "form-control" value={ownerName} placeholder="Owner Name" onChange={(e) => {
                                setOwner(e.target.value);
                            }} />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-group">
                            <input type="number" className= "form-control" value={contact} placeholder="Contact" onChange={(e) => {
                                setContact(e.target.value);
                            }} required/>
                        </div> 
                    </div>
                </div>
                <div className="form-group center">
                    <button className="btn btn-success" style={{"width":120}} onClick={addcat}>Save</button>
                </div>
            </div>
        </form> 
      </div>
    );
  };
    
  export default App;