const fetchInt = () => {
  return fetch('http://localhost:8000/api/', {
    headers: new Headers({
      'Content-Type': 'application/json'
    })
  })
  .then(response => response.json());
};
