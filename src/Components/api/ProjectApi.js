// src/api/projectApi.js

const API_BASE_URL = "https://your-api-endpoint.com/api/projects"; // replace with actual API

export const getProjects = async () => {
  try {
    const response = await fetch(API_BASE_URL);
    if (!response.ok) throw new Error("Failed to fetch");
    return await response.json();
  } catch (error) {
    console.error("API fetch failed, using mock data:", error);
    return [
      {
        id: 1,
        name: 'Magulk.lk',
        description: 'An elegant wedding planning and vendor booking platform.',
        image: '/images/magulk.png',
        link: 'https://www.magulk.lk',
      },
      {
        id: 2,
        name: 'MindWell',
        description: 'A mental wellness web app with therapy sessions and resources.',
        image: '/images/mindwell.png',
        link: 'https://venerable-torrone-eb3d7f.netlify.app/',
      },
    ];
  }
};

export const addProject = async (project) => {
  try {
    const response = await fetch(API_BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });
    return await response.json();
  } catch (error) {
    console.error("Add failed:", error);
    return null;
  }
};

export const updateProject = async (id, project) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(project),
    });
    return await response.json();
  } catch (error) {
    console.error("Update failed:", error);
    return null;
  }
};

export const deleteProject = async (id) => {
  try {
    await fetch(`${API_BASE_URL}/${id}`, {
      method: "DELETE",
    });
    return true;
  } catch (error) {
    console.error("Delete failed:", error);
    return false;
  }
};
