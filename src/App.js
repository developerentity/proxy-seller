import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import './App.css';
import store from './app/store';
import UsersComponent from './components/Users';
import NoMatch from './components/NoMatch';
import UserAlbumsComponent from './components/UserAlbums';
import UserPostsComponent from './components/UserPosts';

function App() {

  return (
    <div className='app'>
      <Provider store={store}>
        <SnackbarProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<UsersComponent />} />
              <Route path="/:userId/albums" element={<UserAlbumsComponent />} />
              <Route path="/:userId/posts" element={<UserPostsComponent />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </BrowserRouter>
        </SnackbarProvider>
      </Provider>
    </div>
  );
}

export default App;
