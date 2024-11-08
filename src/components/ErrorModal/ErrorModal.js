import React,{Fragment} from "react";
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './ErrorModal.module.css';

const ErrorModal = props =>{
    return (
        <Fragment>
            <div className={classes.backdrop} onClick={props.onConfirm}>

            </div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.massege}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </Card>
        </Fragment>
   )
}

export default ErrorModal;