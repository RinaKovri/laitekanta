import './App.css';
import logo from './varialogo.png';
import LoginButton from './components/loginButton';
import AddButton from './components/addButton';
import ArchiveButton from './components/archiveButton';
import DeviceList from './components/DeviceList';

function App() {
  return (
<div>
    <div className='login'>
    <LoginButton />
  </div>
    <div className="form">
      <img src={logo} alt="varialogo" className='logo'></img>
      <h1>LAITEKANTA</h1>
      <div className='inputs'>
        <DeviceList />
        <AddButton />
        <ArchiveButton />
      </div>


    </div></div>
  );
}

export default App;