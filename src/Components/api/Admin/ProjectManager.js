import { useEffect, useState } from 'react';
import {
  getProjects,
  addProject,
  updateProject,
  deleteProject,
} from '../ProjectApi'; // adjust the path based on your file structure

export default function ProjectManager() {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    name: '',
    description: '',
    image: '',
    link: '',
  });

  const [editingId, setEditingId] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load projects on component mount
  useEffect(() => {
    const loadProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    loadProjects();
  }, []);

  // Handle input changes in modal form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProject((prev) => ({ ...prev, [name]: value }));
  };

  // Add or update project
  const handleAddOrEdit = async () => {
    let result;
    if (editingId !== null) {
      result = await updateProject(editingId, newProject);
      if (result) {
        setProjects((prev) =>
          prev.map((p) => (p.id === editingId ? result : p))
        );
      }
      setEditingId(null);
    } else {
      result = await addProject(newProject);
      if (result) {
        setProjects((prev) => [...prev, result]);
      }
    }

    setNewProject({ name: '', description: '', image: '', link: '' });
    setShowModal(false);
  };

  // Set current project to edit
  const handleEdit = (project) => {
    setEditingId(project.id);
    setNewProject(project);
    setShowModal(true);
  };

  // Delete a project
  const handleDelete = async (id) => {
    const success = await deleteProject(id);
    if (success) {
      setProjects((prev) => prev.filter((p) => p.id !== id));
    }
  };

  // Trigger add modal
  const handleAddButtonClick = () => {
    setEditingId(null);
    setNewProject({ name: '', description: '', image: '', link: '' });
    setShowModal(true);
  };



  return (
    <div id='projects' className="p-6 bg-[#19191b]  text-white relative pb-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-300">Project Manager</h1>
        <button
          onClick={handleAddButtonClick}
          className="bg-orange-600 hover:bg-orange-400 text-gray-200 font-bold px-4 py-2 rounded transition"
        >
          + Add Project
        </button>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-4">
          <div className="bg-[#1a1a1c] text-gray-300 p-6 rounded-xl w-full max-w-lg shadow-lg relative">
            <h2 className="text-xl font-bold mb-4">
              {editingId !== null ? 'Edit Project' : 'Add Project'}
            </h2>

            <div className="grid gap-4">
              <input
                type="text"
                name="name"
                placeholder="Project Name"
                value={newProject.name}
                onChange={handleInputChange}
                className="p-2 rounded bg-[#1c1c1e] border border-gray-600"
              />
              <input
                type="text"
                name="description"
                placeholder="Description"
                value={newProject.description}
                onChange={handleInputChange}
                className="p-2 rounded bg-[#1c1c1e] border border-gray-600"
              />
              <input
                type="text"
                name="image"
                placeholder="Image URL"
                value={newProject.image}
                onChange={handleInputChange}
                className="p-2 rounded bg-[#1c1c1e] border border-gray-600"
              />
              <input
                type="text"
                name="link"
                placeholder="Project Link"
                value={newProject.link}
                onChange={handleInputChange}
                className="p-2 rounded bg-[#1c1c1e] border border-gray-600"
              />
              <div className="flex justify-end gap-2 mt-2">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-600 hover:bg-gray-500 px-4 py-2 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddOrEdit}
                  className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded"
                >
                  {editingId !== null ? 'Update' : 'Add'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-[#1a1a1c] rounded-xl p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={project.image}
              alt={project.name}
              className="rounded-lg w-full h-40 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold">{project.name}</h2>
            <p className="text-gray-400 text-sm">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-400 underline mt-2 inline-block"
            >
              Visit Site
            </a>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => handleEdit(project)}
                className="bg-[#1e1e1f] text-gray-300 font-semibold px-3 py-1 rounded hover:bg-black/75"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(project.id)}
                className="bg-yellow-900 text-white px-3 py-1 rounded font-semibold hover:bg-red-500"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
