import React from "react";
import styles from './UserList.module.css';

const UserList = props =>{

    return (
        <div className={styles['card-back']}>
            {props.usersList.map((user =>(
                <div className={styles.card} key={user.id}>
                    <p>{user.name} ({user.age} years old)</p>
                </div>
            )))}
        </div>
    );
}

export default UserList;