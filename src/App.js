import { Routes, Route } from 'react-router-dom';

import DashBoard from './pages/DashBoard';
import MyList from './pages/MyList';
import Favorities from './pages/Favorities';
import Groups from './pages/Groups';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />}>
        <Route path="my-list" element={<MyList />} />
        <Route path="favorities" element={<Favorities />} />
        <Route path="groups" element={<Groups />} />
      </Route>
    </Routes>
  );
}
export default App;
