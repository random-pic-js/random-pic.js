const fetch = require('node-fetch');

const help = () => {
    fetch('http://localhost:3000')
        .then(res => res.json())
        .then(json => console.log(json.available_urls));
}

const animal = () => {
    fetch('http://localhost:3000/animal.json')
        .then(res => res.json())
        .then(json => console.log(json.animal[Math.floor(Math.random() * json.animal.length)]));
}

const anime = () => {
    fetch('http://localhost:3000/anime.json')
        .then(res => res.json())
        .then(json => console.log(json.anime[Math.floor(Math.random() * json.anime.length)]));
}

const boy = () => {
    fetch('http://localhost:3000/boy.json')
        .then(res => res.json())
        .then(json => console.log(json.boy[Math.floor(Math.random() * json.boy.length)]));
}

const couple = () => {
    fetch('http://localhost:3000/couple.json')
        .then(res => res.json())
        .then(json => console.log(json.couple[Math.floor(Math.random() * json.couple.length)]));
}

const eboy = () => {
    fetch('http://localhost:3000/eboy.json')
        .then(res => res.json())
        .then(json => console.log(json.eboy[Math.floor(Math.random() * json.eboy.length)]));
}

const egirl = () => {
    fetch('http://localhost:3000/egirl.json')
        .then(res => res.json())
        .then(json => console.log(json.egirl[Math.floor(Math.random() * json.egirl.length)]));
}

const girl = () => {
    fetch('http://localhost:3000/girl.json')
        .then(res => res.json())
        .then(json => console.log(json.girl[Math.floor(Math.random() * json.girl.length)]));
}

const landscape = () => {
    fetch('http://localhost:3000/landscape.json')
        .then(res => res.json())
        .then(json => console.log(json.landscape[Math.floor(Math.random() * json.landscape.length)]));
}



exports.help = help;
exports.animal = animal;
exports.anime = anime;
exports.boy = boy;
exports.couple = couple;
exports.eboy = eboy;
exports.egirl = egirl;
exports.girl = girl;
exports.landscape = landscape;




