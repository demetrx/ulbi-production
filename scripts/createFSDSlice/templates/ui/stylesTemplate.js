const kebabize = (str) => (
  str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? '-' : '') + $.toLowerCase())
);

module.exports = (componentName) => `.${kebabize(componentName)} {
  // styles here
}`;
