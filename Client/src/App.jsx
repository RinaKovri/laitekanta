import './App.css';
import logo from './varialogo.png';
import LoginButton from './components/loginButton';
import Searching from './components/searching';
import AddButton from './components/addButton';
import ArchiveButton from './components/archiveButton';


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
