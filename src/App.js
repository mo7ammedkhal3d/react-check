import React,{useState} from 'react';
import UserInput from './components/UserInput/UserInput';
import usersList from './components/UserList/UserList';

function App() {

  const [usersList,setUsersList] = useState();
  
  return (
    <div>
      <UserInput />
      <usersList />
    </div>
  );
}

export default App;
