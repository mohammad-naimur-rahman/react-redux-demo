import { Provider } from 'react-redux';
import './App.css';
import BreadContainer from './components/BreadContainer';
import IceCreamContainer from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className='App'>
        <NewCakeContainer />
        <IceCreamContainer />
        <BreadContainer />
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;
