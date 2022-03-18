'use strict';

class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id == 'akadow' && password == 'akadow')
                    ||
                    (id == 'ryan' && password == 'ryan')
                    ||
                    (id == 'test' && password == 'test')) {
                    resolve(id);
                } else {
                    reject(new Error('Not found.'));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                switch (user) {
                    case 'akadow':
                        resolve({name: user, role: 'admin'});
                        break;
                    case 'ryan':
                        resolve({name: user, role: 'user'});
                        break;
                    case 'test':
                    //resolve({name: user, role: 'guest'});
                    //break;
                    default:
                        reject(new Error('No Access'));
                }
            }, 1000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id.', 'akadow');
const password = prompt('enter your password.', 'akadow');
userStorage.loginUser(id, password)
    .then(userStorage.getRoles)
    .then(user => {
        alert(`Hello ${user.name}, you have a ${user.role} role.`);
    })
    .catch(console.log);