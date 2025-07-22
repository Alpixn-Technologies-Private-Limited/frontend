import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import MemberDashBoard from '../components/dashboard/teamMember/MemberDashBoard';

const MemberDashBoardPage = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gray-50">
        <Navbar />
        <div className="flex-1 overflow-y-auto py-6 px-3">
            <MemberDashBoard />
        </div>
      </div>
    </div>
  );
};

export default MemberDashBoardPage;
