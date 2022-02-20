import UserHeader from '../components/UserHeader';
import UserSidebar from '../components/UserSidebar';
import PageProvider from '../provider/PageProvider';

import { Outlet } from 'react-router-dom';

export default function DashBoard() {
  return (
    <div
      className="mx-auto grid lg:grid-cols-[170px_1fr] md:grid-cols-[130px_1fr] 
      grid-cols-[0px_1fr]
      grid-rows-[90px_auto] gap-y-6 lg:px-20 bg-slate-100 min-h-screen px-5 sm:px-10 ">
      <UserHeader />
      <UserSidebar />
      <PageProvider>
        <Outlet />
      </PageProvider>
    </div>
  );
}
