import React,{useState,Fragment,useRef} from "react";
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

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    // const [enteredUserName,setEnteredUserName] = useState('');
    // const [enteredAge,setEnteredAge] = useState('');
    const [error,setError]= useState();

    // const onchangeUserNameHandler = event=>{
    //     setEnteredUserName(event.target.value);
    // }

    // const onChangeAgeHandler = event=>{
    //     setEnteredAge(event.target.value);
    // }

    const addUserHandler = event =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredUserAge = ageInputRef.current.value;

        if(enteredName.trim().length === 0 || enteredUserAge.trim().length ===0){
            setError({
                title:'Invalid input',
                message:'Please enter a valid name and age (non-empty values).',
            });
            return;
        }

        if(+enteredUserAge<0){
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age (age > 0).',
            });
            return;
        }

        const user = {
            id:Math.random().toString(),
            name:enteredName,
            age:enteredUserAge,
        }

        props.onAddUser(user);

        nameInputRef.current.value = '';
        ageInputRef.current.value = '';
    }

    const clearErrorHandler = ()=>{
        setError(null);
    }

    return(
        <Fragment>
            {error && <ErrorModal key="error-modal" title={error.title} massege={error.message} onConfirm={clearErrorHandler}/>}
            <Card key="add-user-card" className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="user-name">User Name</label>
                    <input type="text" id="user-name" ref={nameInputRef}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" id="age" ref={ageInputRef}/>
                    <Button type={'submit'}>Add User</Button>
                </form>
            </Card>
        </Fragment>
    );
}

export default AddUser;