import { useState } from "react";

function Cal(){
    const [count,setCount]=useState(0);
    const [error,setError]=useState("");

    const dec=()=>{
        if(count>0){
            setCount(count-1);
            setError("");
        }
        else{
            setError("no the value out of the bound")
        }
    }
    return(
    <div>
        <h1>Counter : {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increament</button>
        <button onClick={dec}>decreament</button>
        <button onClick={()=>{setCount(0)}}>reset</button>
        {error && <p>{error}</p>}
        </div>
    )

}
export default Cal;