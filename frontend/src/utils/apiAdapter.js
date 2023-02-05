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


export function checkFields(e, fields) {
    fields.forEach(element => {
        if (e.target[element].value === '') {
            console.log("Missing field: " + element);
            return false;
        }
    });
    return true;
}

export function loginUser(user) {
    return new Promise((resolve, reject) => {
        fetch(`http://localhost:5000/users/login?email=${user.email}&password=${user.password}`)
            .then(response => response.json())
            .then(data => resolve(data[0]))
            .catch(error => reject(error))
    })

}