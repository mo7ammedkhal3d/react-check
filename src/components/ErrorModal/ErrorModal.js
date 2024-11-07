import React from "react";
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import classes from './ErrorModal.module.css';

const ErrorModal = props =>{
    return (
        <div>
            <div className={classes.backdrop}>

            </div>
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>{props.title}</h2>
                </header>
                <div className={classes.content}>
                    <p>{props.massege}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={props.onRestError}>Okay</Button>
                </footer>
            </Card>
        </div>
   )
}

export default ErrorModal;