import axios from 'axios';

const Server = axios.create({
  baseURL: 'http://localhost:8080', 
});

export const fetchFeaturedData = () => {
  return Server.get('/featured');
};

export const fetchFeaturedPropertiesData = () => {
  return Server.get('/properties');
};

export const fetchPropertyListData = () => {
  return Server.get('/propertyList');
};
