import React,{useState} from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';

function App() {

  const [usersList,setUsersList] = useState([]);

  const onAddUserHandler = user =>{
    setUsersList(prevUsers=>{
      return[
        ...prevUsers,
        user,
      ]
    })
  }
  
  return (
    <div className='container'>
      <UserInput onAddUser={onAddUserHandler}/>
      {usersList.length > 0 && <UserList usersList={usersList}/>}
    </div>
  );
}

export default App;
