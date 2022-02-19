import { Routes, Route } from 'react-router-dom';

import DashBoard from './pages/DashBoard';
import SignInSignOut from './pages/SignInSignOut';
import MyList from './pages/MyList';
import Favorites from './pages/Favorites';
import Groups from './pages/Groups';

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<SignInSignOut />} />
      <Route path="/" element={<DashBoard />}>
        <Route index path="my-list" element={<MyList />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="groups" element={<Groups />} />
      </Route>
    </Routes>
  );
}
export default App;
