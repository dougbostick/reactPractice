import './App.css';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, [first, last]]);
    setFirst('');
    setLast('');
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
        <button type="submit">Submit</button>
      </form>
      <table>
        <row>
          <column>First</column>
          <column>Last</column>
        </row>
        {userList.map((user) => {
          return (
            <row>
              <column>{user[0]}</column>
              <column>{user[1]}</column>
            </row>
          );
        })}

        {/* <row>First</row>
        <row>Last</row> */}
      </table>
    </div>
  );
}

export default App;
