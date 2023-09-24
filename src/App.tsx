import { useState } from 'react';
import './App.css';

let counter = 0;

function App() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [age, setAge] = useState('');

  const onSubmit = () => {
    alert(
      `Dispatch action and update first name: ${firstName}, last name: ${lastName}, age: ${age}`
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <label>
        First Name:
        <input
          name="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          name="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <div className="label">{`Render count: ${counter++}`}</div>
      <button>Submit</button>
    </form>
  );
}

export default App;
