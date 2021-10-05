/**
 * Random Picture Module
 * @description Get a Random picture for any topic
 * @module random-pic.js
 */

// EhsanFox was here :)

/**
 * Required Packages/Modules
 */
const axios = require('axios');
const { BaseURL, Endpoints } = require('./Config');

/**
 * Get a Random Animal Picture
 * @method
 * @returns {Promise<String>}
 */
exports.animal = () => {
  return new Promise((resolve, reject) => {
    axios.get(BaseURL + Endpoints.Animal)
    .then(data => {
      resolve(data.animal[Math.floor(Math.random() * response.animal.length)])
    })
    .catch(reject);
  });
}

/**
 * Get a Random Anime Picture
 * @method
 * @returns {Promise<String>}
 */
exports.anime = () => {
  return new Promise((resolve, reject) => {
    axios.get(BaseURL + Endpoints.Anime)
    .then(data => {
      resolve(data.anime[Math.floor(Math.random() * response.anime.length)])
    })
    .catch(reject);
  });
};

/**
 * Get a Random Boy Picture
 * @method
 * @returns {Promise<String>}
 */
exports.boy = () => {
  return new Promise((resolve, reject) => {
    axios.get(BaseURL + Endpoints.Boy)
    .then(data => {
      resolve(data.boy[Math.floor(Math.random() * response.boy.length)])
    })
    .catch(reject);
  });
};
  
/**
 * Get a Random Girl Picture
 * @method
 * @returns {Promise<String>}
 */
 exports.girl = () => {
  return new Promise((resolve, reject) => {
    axios.get(BaseURL + Endpoints.Girl)
    .then(data => {
      resolve(data.girl[Math.floor(Math.random() * response.girl.length)])
    })
    .catch(reject);
  });
};

/**
 * Get a Random Couple Picture
 * @method
 * @returns {Promise<String>}
 */
 exports.couple = () => {
  return new Promise((resolve, reject) => {
    axios.get(BaseURL + Endpoints.Couple)
    .then(data => {
      resolve(data.couple[Math.floor(Math.random() * response.couple.length)])
    })
    .catch(reject);
  });
};

/**
 * Get a Random eBoy Picture
 * @method
 * @returns {Promise<String>}
 */
 exports.eboy = () => {
  return new Promise((resolve, reject) => {
    axios.get(BaseURL + Endpoints.eBoy)
    .then(data => {
      resolve(data.eboy[Math.floor(Math.random() * response.eboy.length)])
    })
    .catch(reject);
  });
};

/**
 * Get a Random eGirl Picture
 * @method
 * @returns {Promise<String>}
 */
 exports.egirl = () => {
  return new Promise((resolve, reject) => {
    axios.get(BaseURL + Endpoints.eGirl)
    .then(data => {
      resolve(data.egirl[Math.floor(Math.random() * response.egirl.length)])
    })
    .catch(reject);
  });
};

/**
 * Get a Random Landscape Picture
 * @method
 * @returns {Promise<String>}
 */
 exports.landscape = () => {
  return new Promise((resolve, reject) => {
    axios.get(BaseURL + Endpoints.Landscape)
    .then(data => {
      resolve(data.landscape[Math.floor(Math.random() * response.landscape.length)])
    })
    .catch(reject);
  });
};

/**
 * Get a Random Picture
 * @method
 * @returns {Promise<String>}
 */
 exports.random = () => {
  return new Promise((resolve, reject) => {
    axios.get(BaseURL + Endpoints.Random)
    .then(data => {
      resolve(data.random[Math.floor(Math.random() * response.random.length)])
    })
    .catch(reject);
  });
};