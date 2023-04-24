import './App.css';
import logo from './varialogo.png';
import LoginButton from './components/loginButton';
import Searching from './components/searching';
import AddButton from './components/addButton';
import ArchiveButton from './components/archiveButton';
import AddingForm from './components/AddingForm';

function App() {
  return (
    <div className="App">
       <LoginButton />
      <img src={logo} alt="varialogo"></img>
      <h1>LAITEKANTA</h1>
      <Searching />
      <AddButton />
      <ArchiveButton />
      <AddingForm />


    </div>
  );
}

export default App;
