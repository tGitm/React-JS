import { useState } from 'react';

const Home = () => {

    //let name = 'Tim';
    const [name, setName] = useState('Tim');
    const [age, setAge] = useState(21);

    const handleClick = () => {
        setName('Bojan');
        setAge(22);
    }

    return (
      <div className="home">
        <h2>Homepage</h2>
        <p>{name} is {age} years old.</p>
        <button onClick={handleClick}>Change Name and Age</button>
        <button onClick={() => setName('Tim')}>Reset Name</button>
      </div>
    );
  }
   
  export default Home;