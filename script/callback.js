'use strict';

class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if ((id == 'akadow' && password == 'akadow')
                ||
                (id == 'ryan' && password == 'ryan')
                ||
                (id == 'test' && password == 'test')) {
                onSuccess(id);
            } else {
                onError(new Error('Not found.'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            switch (user) {
                case 'akadow':
                    onSuccess({name: user, role: 'admin'});
                    break;
                case 'ryan':
                    onSuccess({name: user, role: 'user'});
                    break;
                case 'test':
                //onSuccess({name: user, role: 'guest'});
                //break;
                default:
                    onError(new Error('No Access'));
            }
        }, 1000);
    }
}

//Callback Hell
const userStorage = new UserStorage();
const id = prompt('enter your id.', 'akadow');
const password = prompt('enter your password.', 'akadow');
userStorage.loginUser(
    id,
    password,
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`);
            },
            error => {
                console.log(error);
            }
        );
    },
    error => console.log(error),
);

//Promise
//Producer
const promise = new Promise((resolve, reject) => {
    resolve('akadow');
    reject(new Error('no network.'));
});

//Consumers
promise
    .then((value) => {
        console.log(`then: ${value}`);
    })
    .catch(error => {
        console.log(`error: ${error}`);
    })
    .finally(() => console.log('finally'));

const getHen = () =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('hen'), 1000);
    });
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('executed getEgg.');
            if (1 === 1) {//An error occurred.
                return reject(new Error('The egg is broken.'));
            }
            return resolve(`${hen} => egg`);
        }, 1000);
    });
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => fried egg`), 1000);
    });

console.log('Promise chaining');

//Promise chaining
getHen()
    .then(getEgg)//.then(hen => getEgg(hen))
    .catch(error => 'duck egg')
    .then(cook)//.then(egg => cook(egg))
    .then(console.log)//.then(meal => console.log(meal))



