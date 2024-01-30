import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import './App.css';
import store from './app/store';
import UsersList from './components/UsersList';

function App() {

  return (
    <>
      <Provider store={store}>
        <SnackbarProvider>
          <UsersList />
        </SnackbarProvider>
      </Provider>
    </>
  );
}

export default App;
