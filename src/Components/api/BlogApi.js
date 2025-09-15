// src/api/blogApi.js
export const getBlogs = async () => {
    try {
      const response = await fetch('/api/blogs');
      if (!response.ok) throw new Error('Network error');
      return await response.json();
    } catch (err) {
      // fallback mock
      return [
        {
          id: 1,
          title: 'How to Start React',
          date: '2024-06-10',
          description: 'bla bla bla...',
          link: '/blogs/1',
        },
      ];
    }
  };
  
  export const addBlog = async (blog) => {
    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });
      return await response.json();
    } catch (err) {
      return { ...blog, id: Date.now() }; // fallback
    }
  };
  
  export const updateBlog = async (id, blog) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      });
      return await response.json();
    } catch (err) {
      return { ...blog, id };
    }
  };
  
  export const deleteBlog = async (id) => {
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
      return response.ok;
    } catch (err) {
      return true;
    }
  };
  