const axios = require('axios')

const animal =  async function () {
    try {
      const {data:response} = await axios.get('https://api.hadiazari.repl.co/animal') 
      return response.animal[Math.floor(Math.random() * response.animal.length)]
    }
    catch (error) {
      console.log(error);
    }
  }

  const anime =  async function () {
    try {
      const {data:response} = await axios.get('https://api.hadiazari.repl.co/anime') 
      return response.anime[Math.floor(Math.random() * response.anime.length)]
    }
    catch (error) {
      console.log(error);
    }
  }
  
  const boy =  async function () {
    try {
      const {data:response} = await axios.get('https://api.hadiazari.repl.co/boy') 
      return response.boy[Math.floor(Math.random() * response.boy.length)]
    }
    catch (error) {
      console.log(error);
    }
  }

  const girl =  async function () {
    try {
      const {data:response} = await axios.get('https://api.hadiazari.repl.co/girl') 
      return response.girl[Math.floor(Math.random() * response.girl.length)]
    }
    catch (error) {
      console.log(error);
    }
  }

  const couple =  async function () {
    try {
      const {data:response} = await axios.get('https://api.hadiazari.repl.co/couple') 
      return response.couple[Math.floor(Math.random() * response.couple.length)]
    }
    catch (error) {
      console.log(error);
    }
  }

  const eboy =  async function () {
    try {
      const {data:response} = await axios.get('https://api.hadiazari.repl.co/eboy') 
      return response.eboy[Math.floor(Math.random() * response.eboy.length)]
    }
    catch (error) {
      console.log(error);
    }
  }

  const egirl =  async function () {
    try {
      const {data:response} = await axios.get('https://api.hadiazari.repl.co/egirl') 
      return response.egirl[Math.floor(Math.random() * response.egirl.length)]
    }
    catch (error) {
      console.log(error);
    }
  }

  const landscape =  async function () {
    try {
      const {data:response} = await axios.get('https://api.hadiazari.repl.co/landscape') 
      return response.landscape[Math.floor(Math.random() * response.landscape.length)]
    }
    catch (error) {
      console.log(error);
    }
  }

  const random =  async function () {
    try {
      const {data:response} = await axios.get('https://api.hadiazari.repl.co/random') 
      return response.random[Math.floor(Math.random() * response.random.length)]
    }
    catch (error) {
      console.log(error);
    }
  } 

exports.animal = animal;
exports.anime = anime;
exports.boy = boy;
exports.girl = girl;
exports.couple = couple;
exports.eboy = eboy;
exports.egirl = egirl;
exports.landscape = landscape;
exports.random = random;
