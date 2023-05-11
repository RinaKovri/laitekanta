import './App.css';
import logo from './varialogo.png';
import LoginButton from './components/Login/loginButton';
import Searching from './components/Searching/searching';
import AddButton from './components/AddButton/addButton';
import ArchiveButton from './components/ArchiveButton/archiveButton';


function App() {
  return (
    <div className="App">
      <div className='login'>
        <LoginButton />
      </div>
      <img src={logo} alt="varialogo" className='logo'></img>
      <h1>LAITEKANTA</h1>
      <div className='inputs'>
        <Searching />
        <AddButton />
        <ArchiveButton />
      </div>


    </div>
  );
}

export default App;
