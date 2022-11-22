
import './App.css';
import Routers from './routes';
import "bootstrap/dist/css/bootstrap.min.css"
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Routers />
      </div>
    </Provider>
  );
}

export default App;
