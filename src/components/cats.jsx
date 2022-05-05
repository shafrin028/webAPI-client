import React, { Component } from "react"
import axios from "axios"
import Cat from "./cat"


class Cats extends Component {
    state = {
        allCats: []
    }
    render() {
        return(
            <>
            <div className="container" style={{"marginTop":20}}>
                <div className="row">
                    {this.state.allCats.map((cat) => (
                    <div key={cat.id} className="col" style={{"marginTop":30}}>
                        <Cat 
                            key={cat.id} 
                            name={cat.name} 
                            id={cat.id}
                            age={cat.age}
                            color={cat.color}
                            sex={cat.sex}
                            breed={cat.breed}
                            origin={cat.origin}
                            locationUrl={cat.locationUrl}
                            price={cat.price}
                            ownerName={cat.ownerName}
                            contact={cat.contact}
                            onDelete={() => this.deleteCat(cat.id)}
                        />
                    </div>))}
                </div>
            </div>
            </>
        )
    }

    async componentDidMount() {
        let {data} = await axios.get("http://localhost:5000/api/cats");
        console.log(data);
        let cats = data.map(cat => {return {
            id: cat._id,
            name: cat.name,
            age:cat.age,
            color:cat.color,
            sex:cat.sex,
            breed:cat.breed,
            origin:cat.origin,
            locationUrl:cat.locationUrl,
            price:cat.price,
            ownerName:cat.ownerName,
            contact:cat.contact,
        }})

        this.setState({allCats: cats})
    }

    async deleteCat(catId) {
        let cat = await axios.delete(`http://localhost:5000/api/cats/${catId}`)
        let updatedCatArray = this.state.allCats.filter(cat => cat.id !== catId);
        this.setState({allCats: updatedCatArray});

    }
}

export default Cats;
