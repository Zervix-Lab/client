import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get('https://localhost:7079/api/notifications');
        setNotifications(response.data);
      } catch (error) {
        console.error('Error fetching notifications:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const unreadNotifications = notifications.filter((n) => !n.read);

  return (
    <div id="notifications" className="mt-6">
      <h2 className="text-2xl text-gray-300 font-bold mb-4">Unread Notifications</h2>

      <div className="bg-black/80 shadow p-4 rounded-lg space-y-3">
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : unreadNotifications.length === 0 ? (
          <p className="text-gray-400">No unread notifications.</p>
        ) : (
          unreadNotifications.map((n) => (
            <div
              key={n.id}
              className="bg-[#1c1c1e] border border-orange-500/40 p-4 rounded-lg flex justify-between items-start hover:bg-orange-50/10 transition"
            >
              <div>
                <p className="font-bold text-orange-400 mb-1">{n.name}</p>
                <p className="text-gray-300 text-sm mb-1">
                  {n.message.length > 100 ? n.message.slice(0, 100) + '...' : n.message}
                </p>
                <p className="text-gray-400 text-sm">{n.email}</p>
              </div>
              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${n.email}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 text-sm font-semibold bg-orange-500 hover:bg-orange-600 text-white px-3 py-1 rounded transition"
              >
                View
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
