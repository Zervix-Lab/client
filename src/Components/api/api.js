import axios from 'axios';

// Base URL
const BASE_URL = 'https://your-backend-api.com/api'; // replace with your backend URL

// Project APIs
export const fetchProjects = async () => {
  const response = await axios.get(`${BASE_URL}/projects`);
  return response.data;
};

// Blog APIs
export const fetchBlogs = async () => {
  const response = await axios.get(`${BASE_URL}/blogs`);
  return response.data;
};

// Contact Form API (optional - for form submission)
export const sendContactMessage = async (data) => {
  const response = await axios.post(`${BASE_URL}/contact`, data);
  return response.data;
};
