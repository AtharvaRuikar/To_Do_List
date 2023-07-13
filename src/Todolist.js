import * as React from 'react';
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createSvgIcon } from '@mui/material/utils';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/Delete';
import './Todostyle.css'

const PlusIcon = createSvgIcon(
    // credit: plus icon from https://heroicons.com/
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>,
    'Plus',
  );

function Todolist(){
    const [value, setValue] = useState("");
    const [value1, setValue1] = useState([]);

    const handelInputHandler = (e) => {
        setValue(e.target.value);
        console.log(e.target.value);
    }

    const Add = () =>{
        const newarr = [...value1 , value];
        setValue1(newarr);
        setValue("");
    }

    const del = (i) => {
        const temp = [...value1];
        temp.splice(i,1);
        setValue1(temp);
    }
return(
    <div className='container'>
        <h1 className='heading'>To Do List</h1>

        <div className='main mt-5'>
            <TextField className='input_field' id="outlined-basic" label="Enter Your Task Here" variant="outlined"  value={value} onChange={handelInputHandler}/>
            <Button variant="contained" endIcon={<PlusIcon />} onClick={Add}>Add Task</Button>
        </div>
        <div className='List_list mt-5'>
            <List>
                {value1.map((v,i) =>
                    <ListItem>
                        <ListItemButton className='list_item'>
                            <ListItemText className='List_font' primary={v} />
                            <Button variant="outlined" color="error" startIcon={<DeleteIcon />} onClick={() => del(i)}>Delete</Button>
                        </ListItemButton>
                    </ListItem>
                )}
            </List>
        </div>
    </div>
)
}
export default Todolist;