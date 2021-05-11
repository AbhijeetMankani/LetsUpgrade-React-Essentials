import './App.css';
// import First from './components/First';
// import UsersTable from './components/UsersTable';
import UsersCards from './components/UsersCards';

function App() {
  return (
    <div className="App">
      <h1>React.js Essentials</h1>
      {/* <First name="Abhijeet" age='16'></First>
      <First name="Abhijeet" age='16'></First> */}
      {/* <UsersTable></UsersTable> */}
      <UsersCards></UsersCards>
    </div>
  );
}

export default App;
