import { useState } from "react";

const Shop = () => {
    const [value, setvalue] = useState("");
    const [shows, setshow] = useState("");


    const showvalue = (e) => {
  setvalue(e.target.value);
  
    }

    const show=()=>{
        setshow(value);
    }
    return (
        <>
            <h1>{shows}</h1>
            <h1>{value}</h1>
            
            <input type="text" onChange={showvalue} />
            <button onClick={show}>Click me </button>
        </>
    )
}

export default Shop;