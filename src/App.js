import React,{useState} from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';

const users =[
  {
    id:Math.random().toString(),
    name:'mohammed khaled binhazim',
    age:27
  },
  {
    id:Math.random().toString(),
    name:'Abdullah khaled binhazim',
    age:22,
  }
] 

function App() {

  const [usersList,setUsersList] = useState(users);

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
      <UserList usersList={usersList}/>
    </div>
  );
}

export default App;
