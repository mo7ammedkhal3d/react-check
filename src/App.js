import React,{useState} from 'react';
import UserInput from './components/UserInput/UserInput';
import UserList from './components/UserList/UserList';

const users ={
  'mohammed khaled binhazim':27,
  'abdullah khaled binhazim':22,
}

function App() {

  const [usersList,setUsersList] = useState(users);
  
  return (
    <div className='container'>
      <UserInput />
      <UserList usersList={usersList}/>
    </div>
  );
}

export default App;
