import './App.css';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [userList, setUserList] = useState([]);

  const myReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!first || !last || !email) {
      setError('Please fill out all fields');
      return;
    }
    if (!myReg.test(email)) {
      setError('Please use a valid email');
      return;
    }
    setUserList([...userList, { first, last, email }]);
    setFirst('');
    setLast('');
    setEmail('');
    setError('');
  };

  const handleRemove = (target) => {
    console.log('target', target);
    setUserList(userList.filter((user) => user.email !== target.email));
  };

  return (
    <div className="App">
      <h1>React Form</h1>
      <h3>{error}</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder={'first name...'}
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <input
          placeholder={'last name...'}
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <input
          placeholder={'email...'}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <table>
        <row>
          <column>First</column>
          <column>Last</column>
          <column>Email</column>

          <column>Delete</column>
        </row>
        {userList.map((user) => {
          return (
            <row>
              <column>{user.first}</column>
              <column>{user.last}</column>
              <column>{user.email}</column>
              <column>
                <button onClick={() => handleRemove(user)}>Remove</button>
              </column>
            </row>
          );
        })}
      </table>
    </div>
  );
}

export default App;
