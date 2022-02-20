import { Routes, Route } from 'react-router-dom';

import { Toaster } from 'react-hot-toast';

import PrivateRoute from './routes/PrivateRoute';
import AuthProvider from './provider/AuthProvider';

import DashBoard from './pages/DashBoard';
import SignInSignOut from './pages/SignInSignOut';
import MyList from './pages/MyList';
import Favorites from './pages/Favorites';
import Groups from './pages/Groups';
import Settings from './pages/Settings';

function App() {
  return (
    <>
      <AuthProvider>
        <Routes>
          <Route path="/auth" element={<SignInSignOut />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<DashBoard />}>
              <Route index path="my-list" element={<MyList />} />
              <Route path="favorites" element={<Favorites />} />
              <Route path="groups" element={<Groups />} />
              <Route path="account" element={<Settings />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
      <Toaster />
    </>
  );
}
export default App;
