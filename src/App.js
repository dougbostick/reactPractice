import './App.css';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [email, setEmail] = useState('');
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, { first, last, email }]);
    setFirst('');
    setLast('');
    setEmail('');
  };

  const handleRemove = (target) => {
    console.log('target', target);
    setUserList(userList.filter((user) => user.email !== target.email));
  };

  return (
    <div className="App">
      <h1>React Form</h1>
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
