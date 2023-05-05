const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const createModel = require('./model/createModel');
const createUI = require('./ui/createUI');
const createPublicApi = require('./createPublicApi');
const firstCharLowerCase = require('../helpers/firstCharLowerCase');

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName));
  } catch (e) {
    console.log(`Failed to create files and components structure for "${sliceName}" slice. `, e);
  }

  await createModel(layer, firstCharLowerCase(sliceName));
  await createUI(layer, sliceName);
  await createPublicApi(layer, sliceName);
};
