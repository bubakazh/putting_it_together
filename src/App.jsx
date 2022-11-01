import './App.css';
import UserCard from './UserCard';

  const user = {
    firstName: "Troy",
    lastName: "Manansala",
    age: 33,
    hairColor: "black, partially dyed blonde"
  }

  const user2 = {
    firstName: "Angelica",
    lastName: "Cruz",
    age: 24,
    hairColor: "black, dyed brown"
  }

  const user3 = {
    firstName: "Cherry",
    lastName: "de Dios",
    age: 25,
    hairColor: "black"
  }

  const user4 = {
    firstName: "Shihori",
    lastName: "Nakaide",
    age: 31,
    hairColor: "black"
  }

function App() {

  return (
    <fieldset>
      <legend>App.jsx</legend>
      {/* <UserCard firstName = "Angelica" lastName = "Cruz" age = {24} hairColor = "black, dyed brown" />
      <UserCard firstName = "Cherry" lastName = "de Dios" age = {25} hairColor = "black" />      
      <UserCard firstName = "Shihori" lastName = "Nakaide" age = {31} hairColor = "black" /> */}

      <UserCard user = {user} />
      <UserCard user = {user2} />
      <UserCard user = {user3} />
      <UserCard user = {user4} />
    </fieldset>
  );
}

export default App;
 