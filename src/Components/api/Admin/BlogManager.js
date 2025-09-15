import { useEffect, useState } from 'react';
import {
  getBlogs,
  addBlog,
  updateBlog,
  deleteBlog,
} from '../BlogApi'; // adjust path as needed

export default function BlogManager() {
  const [blogs, setBlogs] = useState([]);
  const [newBlog, setNewBlog] = useState({ title: '', date: '', link: '', description: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editId, setEditId] = useState(null);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    loadBlogs();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog((prev) => ({ ...prev, [name]: value }));
  };

  const openAddModal = () => {
    setNewBlog({ title: '', date: '', link: '', description: '' });
    setEditId(null);
    setIsModalOpen(true);
  };

  const openEditModal = (blog) => {
    setNewBlog(blog);
    setEditId(blog.id);
    setIsModalOpen(true);
  };

  const handleSave = async () => {
    if (newBlog.title.trim() && newBlog.date) {
      let result;
      if (editId) {
        result = await updateBlog(editId, newBlog);
        if (result) {
          setBlogs((prev) => prev.map((b) => (b.id === editId ? result : b)));
        }
      } else {
        result = await addBlog(newBlog);
        if (result) {
          setBlogs((prev) => [...prev, result]);
        }
      }

      setNewBlog({ title: '', date: '', link: '', description: '' });
      setEditId(null);
      setIsModalOpen(false);
    }
  };

  const handleDelete = async (id) => {
    const success = await deleteBlog(id);
    if (success) {
      setBlogs((prev) => prev.filter((b) => b.id !== id));
    }
  };


  return (
    <div id="blogs" className="mt-0">
      <div className='flex justify-between mb-6'>
        <h2 className="text-2xl text-gray-300 font-bold mb-4">Blog Management</h2>
        <button
          className="bg-orange-600 hover:bg-orange-400 text-gray-200 font-bold px-4 py-2 rounded transition"
          onClick={openAddModal}
        >
          + Add Blog
        </button>
      </div>

      <div className="bg-black/80 shadow p-4 rounded-lg">
        <table className="w-full text-left">
          <thead className="text-gray-600">
            <tr>
              <th className="py-2">Title</th>
              <th>Date</th>
              <th>Read</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody className='text-white/50'>
            {blogs.map((blog) => (
              <tr key={blog.id} className="border-t">
                <td className="py-2">{blog.title}</td>
                <td>{blog.date}</td>
                <td>
                  {blog.link && (
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline hover:text-blue-800"
                    >
                      Read it here
                    </a>
                  )}
                </td>
                <td>{blog.description}</td>
                <td>
                  <button
                    className="text-sm text-blue-500 mr-3 font-semibold hover:underline"
                    onClick={() => openEditModal(blog)}
                  >
                    Edit
                  </button>
                  <button
                    className="text-sm text-red-600 font-semibold hover:underline"
                    onClick={() => handleDelete(blog.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition">
          <div className="bg-[#1a1a1c] text-gray-300 p-6 rounded-xl w-full max-w-lg shadow-lg relative">
            <h3 className="text-xl font-bold mb-4">
              {editId ? 'Edit Blog' : 'Add New Blog'}
            </h3>
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              value={newBlog.title}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-[#1c1c1e] border border-gray-600 mb-4"
            />
            <input
              type="date"
              name="date"
              value={newBlog.date}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-[#1c1c1e] border border-gray-600 mb-4"
            />
            <input
              type="text"
              name="link"
              placeholder="Blog Link (optional)"
              value={newBlog.link}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-[#1c1c1e] border border-gray-600 mb-4"
            />
            <input
              type="text"
              name="description"
              placeholder="Blog Description"
              value={newBlog.description}
              onChange={handleInputChange}
              className="w-full p-2 rounded bg-[#1c1c1e] border border-gray-600 mb-4"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-600  rounded hover:bg-gray-500"
                onClick={() => {
                  setIsModalOpen(false);
                  setEditId(null);
                  setNewBlog({ title: '', date: '', link: '', description: '' });
                }}
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 rounded"
                onClick={handleSave}
              >
                {editId ? 'Update' : 'Save'}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
