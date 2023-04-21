import './App.css';
import logo from './varialogo.png';
import LoginButton from './components/loginButton';
import Searching from './components/searching';
import AddButton from './components/addButton';
import ArchiveButton from './components/archiveButton';

function App() {
  return (
    <div className="App">
       <LoginButton />
      <img src={logo}></img>
      <h1>LAITEKANTA</h1>
      <Searching />
      <AddButton />
      <ArchiveButton />
    </div>
  );
}

export default App;
