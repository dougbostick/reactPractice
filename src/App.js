import './App.css';
import { useState } from 'react';

function App() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');
  const [userList, setUserList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserList([...userList, [last, first]]);
    setFirst('');
    setLast('');
  };

  return (
    <div className="App">
      <h1>React Form</h1>
      <form onSubmit={handleSubmit}>
        <input value={first} onChange={(e) => setFirst(e.target.value)} />
        <input value={last} onChange={(e) => setLast(e.target.value)} />
        <button type="submit">Submit</button>
      </form>
      <div>
        {userList.map((user) => {
          return (
            <div>
              {user[0]} {user[1]}{' '}
            </div>
          );
        })}
      </div>
      <table>
        <column>First</column>
        <column>Last</column>

        {/* <row>First</row>
        <row>Last</row> */}
      </table>
    </div>
  );
}

export default App;
