import {useState} from 'react'
import './Style.css'
function Input(){
    const [value, setValue] = useState("");
    const [value1 , setValue1] = useState([]);
    const [Display, setDisplay] = useState(false);

    const handelInputHandler = (e) => {
        setValue(e.target.value);
        setDisplay(false);
    }

    const displayonclick = () => {
        setDisplay(true);
    }

    const table = () => {
        let arr=[];
        for(let i=1 ; i <= 10 ; i++)
        {
            arr[i]=` ${i*value} `;
        }
        setValue1(arr);
    }


    return(
        <div className='container mt-5'>
            <label >Enter Number :</label>
            <div className='row'>
                <div className='col-6 abc'>
                    <input type="text" placeholder="Enter Name" className='form-control me-3' onChange={handelInputHandler}></input>
                    <button type="submit" className='btn btn-primary' onClick={table}>Submit</button>
                </div>
            </div>
            
        <div className='temp'>
        <table className='table table-bordered'>
            
                {value1.map((v,i) => (
                    <tr>
                    <td className='table'>{value} X {i} = {v}
                    </td>
                    </tr>
                ))}
            
        </table>
        </div>
        </div>
    )
}
export default Input ;