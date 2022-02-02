import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';

import { Outlet } from 'react-router-dom';

export default function DashBoard() {
  return (
    <div className="mx-auto grid grid-cols-[170px_1fr] grid-rows-[90px_auto] gap-y-6 px-20 bg-slate-100 h-screen">
      <UserHeader />
      <UserSidebar />
      <Outlet />
    </div>
  );
}
