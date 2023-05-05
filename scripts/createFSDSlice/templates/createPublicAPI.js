const fs = require('fs/promises');
const resolveRoot = require('../helpers/resolveRoot');
const firstCharUpperCase = require('../helpers/firstCharUpperCase');

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName);
  const schemaName = `${firstCharUpperCase(sliceName)}Schema`;

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'index.ts'),
      `export { ${componentName} } from './ui/${componentName}/${componentName}';
export { ${schemaName} } from './model/types/${schemaName}';
`,
    );
  } catch (e) {
    console.log('Не удалось создать PUBLIC API');
  }
};
