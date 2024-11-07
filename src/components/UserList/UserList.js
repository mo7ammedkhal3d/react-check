import React from "react";
import styles from './UserList.module.css';

const UserList = props =>{
    console.log(props.userList);
    
    return (
        <div className={styles['card-back']}>
            {props.userList.map(user=>(
                <div className={styles.card}>
                    <p>{user.name} ({user.age} years old)</p>
                </div>
            ))}
        </div>
    );
}

export default UserList;