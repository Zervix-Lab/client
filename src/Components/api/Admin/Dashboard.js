// components/admin/Dashboard.jsx
export default function Dashboard() {
    return (
      <div id="dashboard">
        <h2 className="text-2xl text-gray-300 font-bold mb-6">Dashboard</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-black/70 shadow-md p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-400">Total Projects</h3>
            <p className="text-3xl font-bold text-orange-400 mt-2">2</p>
          </div>
          <div className="bg-black/70 shadow-md p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-400">Total Blogs</h3>
            <p className="text-3xl font-bold text-orange-400 mt-2">0</p>
          </div>
          <div className="bg-black/70 shadow-md p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-400">Notifications</h3>
            <p className="text-3xl font-bold text-orange-400 mt-2">8</p>
          </div>
        </div>
      </div>
    );
  }
  