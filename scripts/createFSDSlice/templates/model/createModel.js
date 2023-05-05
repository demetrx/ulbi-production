const fs = require('fs/promises');
const resolveRoot = require('../../helpers/resolveRoot');
const reduxSliceTemplate = require('./reduxSliceTemplate');
const schemaTypeTemplate = require('./schemaTypeTemplate');
const firstCharUpperCase = require('../../helpers/firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => (
    resolveRoot('src', layer, sliceName, 'model', ...segments)
  );

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath());
      await fs.mkdir(resolveModelPath('types'));
      await fs.mkdir(resolveModelPath('slices'));
      await fs.mkdir(resolveModelPath('selectors'));
      await fs.mkdir(resolveModelPath('services'));
    } catch (e) {
      console.log(`Failed to create "model" segment for "${sliceName}" slice. `, e);
    }
  };

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName),
      );
    } catch (e) {
      console.log(`Failed to create redux slice for "${sliceName}". `, e);
    }
  };

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${firstCharUpperCase(sliceName)}Schema.ts`),
        schemaTypeTemplate(sliceName),
      );
    } catch (e) {
      console.log(`Failed to create state schema type for "${sliceName}". `, e);
    }
  };

  await createModelStructure();
  await createReduxSlice();
  await createSchemaType();
};
