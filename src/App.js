import logo from './logo.svg';
import './App.css';
import Header from './header/Header'
import Navbar from "./navbar/Navbar";
import Profile from "./profile/Profile";

function App() {
  return (
    <div className='wrapper'>
      <Header/>
      <Navbar/>
      <Profile/>
    </div>
  );
}



export default App;
