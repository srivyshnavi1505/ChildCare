import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Child = () => {

const {id}=useParams();
const [child, setchild]= useState({});

useEffect(()=> {
    axios.get('http://localhost:3000/'+id)
        .then((res)=> {
            setchild(res.data);
        })
        .catch(err=> console.log(err));
})

    return ( 
        <div className="child">
            <h2>{child.name}</h2>
            <p>{child.age}</p>
            <button>Donate</button>
        </div>
     );
}
 
export default Child;