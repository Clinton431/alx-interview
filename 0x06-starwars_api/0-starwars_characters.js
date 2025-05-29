#!/usr/bin/node

const request = require('request');

request('https://swapi-api.alx-tools.com/api/films/' + process.argv[2], function (err, res, body) {
  if (err) throw err;
  const characters = JSON.parse(body).characters;
  exactOrder(characters, 0);
});

const exactOrder = (characters, x) => {
  if (x === characters.length) return;
  request(characters[x], function (err, res, body) {
    if (err) throw err;
    console.log(JSON.parse(body).name);
    exactOrder(characters, x + 1);
  });
};
