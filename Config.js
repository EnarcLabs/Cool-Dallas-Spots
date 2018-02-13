let Config = {};

Config.mongodbURL = process.env.mongodbURL || "ds235418.mlab.com:35418/cooldallasspots";
Config.mongodbUser = process.env.mongodbUser || "";
Config.mongodbPass = process.env.mongodbPass || "";
Config.listenPort = process.env.processPort || 3000;

module.exports = Config;
