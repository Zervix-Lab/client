import AdminNavBar from '../Components/api/Admin/AdminNavBar';
import ProjectManager from '../Components/api/Admin/ProjectManager';
import BlogManager from '../Components/api/Admin/BlogManager';
import Notifications from '../Components/api/Admin/Notifications';
import Dashboard from '../Components/api/Admin/Dashboard';


export default function AdminBoard() {
  return (
    <div className="flex h-screen bg-[#1a1a1a] overflow-hidden">
        <div><AdminNavBar/></div>
          
    <div className="flex-1 p-6 overflow-y-auto">
        <Dashboard />
        <ProjectManager />
        <BlogManager />
        <Notifications />
      </div>
    </div>
  );
}
