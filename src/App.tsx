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
    <Provider store={store}>
      <SnackbarProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate replace to="/users" />} />
            <Route path="users" element={<UsersComponent />} />
            <Route path="users/:userId/albums" element={<UserAlbumsComponent />} />
            <Route path="users/:userId/posts" element={<UserPostsComponent />} />
            <Route path="*" element={<NoMatch />} />
          </Routes>
        </BrowserRouter>
      </SnackbarProvider>
    </Provider>
  );
}

export default App;
