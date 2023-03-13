export const $_getPosts = () => {
    const endpoint = "https://api.github.com/users/Omafovbe/repos";
  
    return fetch(endpoint).then((response) => response.json());
  };