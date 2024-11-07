import React,{useState} from "react";
import Card from "../UI/Card/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button/Button";

const AddUser = props =>{

    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');

    const onchangeUserNameHandler = event=>{
        setEnteredUserName(event.target.value);
    }

    const onChangeAgeHandler = event=>{
        setEnteredAge(event.target.value);
    }

    const addUserHandler = event =>{
        event.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge.trim().length ===0){
            return;
        }

        if(+enteredAge<0){
            return;
        }

        const user = {
            id:Math.random().toString(),
            name:enteredUserName,
            age:enteredAge,
        }

        props.onAddUser(user);

        setEnteredUserName('');
        setEnteredAge('');
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="user-name">User Name</label>
                <input value={enteredUserName} type="text" id="user-name" onChange={onchangeUserNameHandler}/>
                <label htmlFor="age">Age (Years)</label>
                <input value={enteredAge} type="text" id="age" onChange={onChangeAgeHandler}/>
                <Button type={'submit'}>Add User</Button>
            </form>
        </Card>
    );
}

export default AddUser;