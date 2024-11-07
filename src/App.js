import React,{useState,Fragment} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import Wrapper from './components/Helpers/Wrapper';
import { Fragment } from 'react';

function App() {

  const [usersList,setUsersList] = useState([]);

  const addUserHandler = user =>{
    setUsersList(prevUsersList=>{
      return[
        ...prevUsersList,
        user,
      ]
    })
  }
  
  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      {usersList.length && <UsersList users={usersList}/>}
    </Fragment>
  );
}

export default App;
