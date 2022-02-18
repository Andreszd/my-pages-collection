import { Routes, Route } from 'react-router-dom';

import DashBoard from './pages/DashBoard';
import MyList from './pages/MyList';
import Favorites from './pages/Favorites';
import Groups from './pages/Groups';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route path="my-list" element={<MyList />} />
        <Route path="favorites" element={<Favorites />} />
        <Route path="groups" element={<Groups />} />
      </Route>
    </Routes>
  );
}
export default App;
