const fetch = require('node-fetch');
const insver = require('../package.json').version;
const chalk = require('chalk');
const request = require('request')

request({ url: 'https://api.hadiazari.repl.co/config.json', json: true }, function (error, response, body) {
    if (body.VER > insver) {
        return console.log(chalk.yellowBright('\n\nYou are using the outdated version\n') + chalk.red('Installed Version : ' + insver + '\nLatest Version : ' + body.VER) + chalk.blue('\nUse npm i random-pic.js for update\n\n'));
    }
});

const animal = async function () {
    const res = await fetch('https://api.hadiazari.repl.co/animal.json');
    const data = await res.json();
    console.log(data.animal[Math.floor(Math.random() * data.animal.length)])
}

const anime = async function () {
    const res = await fetch('https://api.hadiazari.repl.co/anime.json');
    const data = await res.json();
    console.log(data.anime[Math.floor(Math.random() * data.anime.length)])
}

const boy = async function () {
    const res = await fetch('https://api.hadiazari.repl.co/boy.json');
    const data = await res.json();
    console.log(data.boy[Math.floor(Math.random() * data.boy.length)])
}

const girl = async function () {
    const res = await fetch('https://api.hadiazari.repl.co/girl.json');
    const data = await res.json();
    console.log(data.girl[Math.floor(Math.random() * data.girl.length)])
}

const couple = async function () {
    const res = await fetch('https://api.hadiazari.repl.co/couple.json');
    const data = await res.json();
    console.log(data.couple[Math.floor(Math.random() * data.couple.length)])
}

const eboy = async function () {
    const res = await fetch('https://api.hadiazari.repl.co/eboy.json');
    const data = await res.json();
    console.log(data.eboy[Math.floor(Math.random() * data.eboy.length)])
}

const egirl = async function () {
    const res = await fetch('https://api.hadiazari.repl.co/egirl.json');
    const data = await res.json();
    console.log(data.egirl[Math.floor(Math.random() * data.egirl.length)])
}

const landscape = async function () {
    const res = await fetch('https://api.hadiazari.repl.co/landscape.json');
    const data = await res.json();
    console.log(data.landscape[Math.floor(Math.random() * data.landscape.length)])
}

exports.animal = animal;
exports.anime = anime;
exports.boy = boy;
exports.girl = girl;
exports.couple = couple;
exports.eboy = eboy;
exports.egirl = egirl;
exports.landscape = landscape;