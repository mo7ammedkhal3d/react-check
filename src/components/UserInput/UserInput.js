import React, { useState } from "react";
import styles from './UserInput.module.css';

const initalValues = {
    'name':'',
    'age':'',
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

    const submitHandler = event =>{
        event.preventDefault();
        const formElements = event.target.elements;        

        const user = {
            id:Math.random().toString(),
            name:formElements.name.value,
            age:formElements.age.value,
        }

        props.onAddUser(user); 

        setUserInput(initalValues);
    }
    

    return (
        <div className={styles['card-back']}>
            <div className={styles['card-header']}>
                <p>Inter User Name and Age</p>
            </div>
            <div className={styles.card}>
                <form onSubmit={submitHandler}>
                    <div className={styles['form-group']}>
                            <label>User name</label>
                        <input value={UserInput['name']} type="text" id="name" onChange={onChangeHandler}/>
                    </div>
                    <div className={styles['form-group']}>
                        <label>Age</label>
                        <input value={UserInput['age']} type="number" id="age"  onChange={onChangeHandler}/>
                    </div>
                    <div>
                        <button className={styles['btn-add']}>Add</button>
                    </div>
                </form>
            </div>  
        </div>
        
    );
}

export default UserInput;