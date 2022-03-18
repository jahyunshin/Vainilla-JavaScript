'use strict';

const fetchUser = () => {
    return new Promise((resolve, reject) => {
        resolve('akadow');
    });
}
fetchUser().then(console.log);

async function asyncFetchUser () {
    return 'async akadow';
}
asyncFetchUser().then(console.log);

// Like callback hell
const delay = (ms, msg) => {
    if (msg) { console.log(`msg: ${msg}`); };
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getApple(msg) {
    await delay(1000, msg);
    return 'apple';
}

async function getBanana (msg) {
    await delay(2000, msg);
    return 'banana';
}

const pickFruits = () => {
    return getApple(1).then(apple => {
        return getBanana(2).then(banana => `${apple} + ${banana}`);
    });
}

async function asyncPickFruits() {
    const apple = await getApple(3);
    const banana = await getBanana(4);
    return `${await getApple(5)} + ${await getBanana(6)}`;
}

async function pickAllFruits() {
    return Promise.all([getApple(7), getBanana(8), getApple(9), getBanana(10)]);
}

pickFruits().then(console.log);
asyncPickFruits().then(console.log);
pickAllFruits().then(console.log);

Promise.race([getApple(11), getBanana(12)]).then(fruits => console.log(`Promise.race fruits: ${fruits}`));

console.log('clear.');