
import { useSelector } from 'react-redux';
import './App.css';
import ColorSelected from './components/ColorSelected';
import Login from './components/Login';
import Profile from './components/Profile';


function App() {

  const isLogin = useSelector(state => state.user.value)
  const theme = useSelector(state => state.theme.value)
  return (

    <div className="App" style={{
      backgroundColor: theme, Height: '100%', width: "100%"
    }}>

      <ColorSelected /> <br />
      {
        isLogin.username ? <Profile /> : <Login />
      }

    </div>

  );
}

export default App;
