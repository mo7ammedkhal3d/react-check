import React, { useState } from "react";
import styles from './UserInput.module.css';

const initalValues = {
    'user-name':'',
    'age':0,
}

const UserInput = props =>{

    const [UserInput,setUserInput] = useState(initalValues);

    const onChangeHandler = event =>{
        setUserInput(pervUserInput=>{
            return{
                ...pervUserInput,
                [event.target.id]:event.target.value,
            }
        })
    }

    return (
        <form>
            <div class={styles['form-group']}>
                <label>User name</label>
                <input type="text" id="user-name" onChange={onChangeHandler}/>
            </div>
            <div className={styles['form-group']}>
                <label>Age</label>
                <input type="number" id="age"  onChange={onChangeHandler}/>
            </div>
            <div>
                <button className={styles['btn-add']}>Add</button>
            </div>
        </form>
    );
}

export default UserInput;