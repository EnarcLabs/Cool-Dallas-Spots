let Config = {};

Config.mongodbURL = process.env.mongodbURL || "";
Config.mongodbUser = process.env.mongodbUser || "";
Config.mongodbPass = process.env.mongodbPass || "";
Config.listenPort = process.env.PORT || 3000;

module.exports = Config;
