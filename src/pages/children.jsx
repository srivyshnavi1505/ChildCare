import axios from "axios";
import { useEffect, useState } from "react";

const Children = () => {

let [children,setchildren]=useState([]);

useEffect(()=> {
    axios.get('http://localhost:3000/')
        .then((res)=> {
            setchildren(res.data);
        })
        .catch(err=> console.log(err));
}, []);

    return ( 
        <div>
            <h2>List of children: </h2>
            {children.map((child)=> (
                <div className="child" key={child._id}>
                    <h3>{child.name}</h3>
                    <p>{child.age}</p>
                </div>
            ))}
        </div>
     );
}
 
export default Children;