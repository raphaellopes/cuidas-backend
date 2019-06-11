const { mongodbUri } = require(`./${process.env.NODE_ENV}`);

module.exports = {
  uri: mongodbUri,
};
