import { useState } from "react";
const arr = [];

function Todolist(){
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState([]);

    const handelInputHandler = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    const Add = () =>{
        arr.push(value);
        console.log(arr);
        setValue("");
        setValue1(arr);
    }

    const del = (i) => {
        const temp = [...arr];
        arr.splice(i,1);
        temp.splice(i,1);
        setValue1(temp);

    }
return(
    <div>
        <h1>To do list</h1>
        <input type="text" class="form-control input" id="inputField" value={value} onChange={handelInputHandler}></input>
        <button  class="btn btn-primary" onClick={Add}>Add</button>


        <ul>
            { value1.map((v,i) => (            
                <li>{v}
                <button onClick={() => del(i)}>Delete</button>
                </li>
            ))}
        </ul>


    </div>

    
)
}
export default Todolist;