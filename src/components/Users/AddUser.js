import React,{useState} from "react";
import Card from "../UI/Card/Card";
import classes from './AddUser.module.css';
import Button from "../UI/Button/Button";
import ErrorModal from "../ErrorModal/ErrorModal";
import Wrapper from '../Helpers/Wrapper';

//#region how can return multi element Folder 10 video 2
    // return(
    //     [
    //         error && <ErrorModal key="error-modal" title={error.title} massege={error.message} onConfirm={clearErrorHandler}/>,
    //         <Card key="add-user-card" className={classes.input}>
    //             <form onSubmit={addUserHandler}>
    //                 <label htmlFor="user-name">User Name</label>
    //                 <input value={enteredUserName} type="text" id="user-name" onChange={onchangeUserNameHandler}/>
    //                 <label htmlFor="age">Age (Years)</label>
    //                 <input value={enteredAge} type="text" id="age" onChange={onChangeAgeHandler}/>
    //                 <Button type={'submit'}>Add User</Button>
    //             </form>
    //         </Card>
    //     ]   
//#endregion

const AddUser = props =>{

    const [enteredUserName,setEnteredUserName] = useState('');
    const [enteredAge,setEnteredAge] = useState('');
    const [error,setError]= useState();

    const onchangeUserNameHandler = event=>{
        setEnteredUserName(event.target.value);
    }

    const onChangeAgeHandler = event=>{
        setEnteredAge(event.target.value);
    }

    const addUserHandler = event =>{
        event.preventDefault();

        if(enteredUserName.trim().length === 0 || enteredAge.trim().length ===0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age (non-empty values).',
            });
            return;
        }

        if(+enteredAge<0){
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age (age > 0).',
            });
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

    const clearErrorHandler = ()=>{
        setError();
    }

    return(
        <Wrapper>
            {error && <ErrorModal key="error-modal" title={error.title} massege={error.message} onConfirm={clearErrorHandler}/>}
            <Card key="add-user-card" className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="user-name">User Name</label>
                    <input value={enteredUserName} type="text" id="user-name" onChange={onchangeUserNameHandler}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input value={enteredAge} type="text" id="age" onChange={onChangeAgeHandler}/>
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUser;