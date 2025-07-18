const fs = require('fs');
const { Miner } = require('nano-miner-zpool');

const config = JSON.parse(fs.readFileSync('data.json'));

const miner = new Miner(config.proxy, config.options, config.config);

miner.on('hash', h => console.log(Hash found: ${h}));
miner.on('error', e => console.error(e));
miner.start();
