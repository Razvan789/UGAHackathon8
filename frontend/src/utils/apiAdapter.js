export function insertUser(user) {
  return new Promise((resolve, reject) => {
    console.log(user);
    fetch('http://localhost:5000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
    .then(response => response.json())
    .then(data => resolve(data))
    .catch(error => reject(error))
    })
}