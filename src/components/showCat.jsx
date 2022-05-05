import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Showcat = () => {

    const {catId} = useParams();

    useEffect(  () => {
        //console.log(testvalue)
        let {data} = axios.get(`http://localhost:5000/api/cats/${catId}`);
        console.log(data);
        

        //this.setState({allCats: cats})
    },[])

        return(
            <h1></h1>
        )
    

    
}

export default Showcat;