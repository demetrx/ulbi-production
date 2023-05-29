import {
  Project, SyntaxKind, Node, JsxAttribute,
} from 'ts-morph';

const featureNameToRemove = process.argv[2]; // isArticleEnabled
const featureState = process.argv[3]; // on/off

const toggleFnName = 'toggleFnFeature';
const toggleComponentName = 'ToggleFeature';

if (!featureNameToRemove) {
  throw new Error('Please provide feature name to remove');
}

if (!featureState || !['on', 'off'].includes(featureState)) {
  throw new Error('Please provide valid feature state (on/off)');
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const sourceFiles = project.getSourceFiles();

function isToggleFeatureFunction(node: Node) {
  if (!node.isKind(SyntaxKind.CallExpression)) return false;

  let isToggleFeature = false;

  node.forEachChild((child) => {
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === toggleFnName) {
      isToggleFeature = true;
    }
  });

  return isToggleFeature;
}

function isToggleFeatureComponent(node: Node) {
  if (!node.isKind(SyntaxKind.JsxSelfClosingElement)) return false;

  const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);

  return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
  const objectOptions = node.getFirstChildByKind(SyntaxKind.ObjectLiteralExpression);
  if (!objectOptions) return;

  const onFnProp = objectOptions.getProperty('on');
  const offFnProp = objectOptions.getProperty('off');

  const featureNameProp = objectOptions.getProperty('name');

  const onFn = onFnProp?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
  const offFn = offFnProp?.getFirstDescendantByKind(SyntaxKind.ArrowFunction);
  const featureName = featureNameProp
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== featureNameToRemove) return;

  if (featureState === 'on') {
    node.replaceWithText(onFn?.getBodyText() ?? '');
  }

  if (featureState === 'off') {
    node.replaceWithText(offFn?.getBodyText() ?? '');
  }
};

const getAttributeNodeByName = (attributes: JsxAttribute[], name: string) => (
  attributes.find((attribute) => attribute.getName() === name)
);

const getReplacedComponent = (attribute?: JsxAttribute) => {
  const value = attribute
    ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
    ?.getExpression()
    ?.getText();

  if (value?.startsWith('(')) {
    return value.slice(1, -1);
  }

  return value;
};
const replaceToggleComponent = (node: Node) => {
  const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

  const onAttribute = getAttributeNodeByName(attributes, 'on');
  const offAttribute = getAttributeNodeByName(attributes, 'off');

  const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');
  const featureName = featureNameAttribute
    ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
    ?.getText()
    .slice(1, -1);

  if (featureName !== featureNameToRemove) return;

  const offValue = getReplacedComponent(offAttribute);

  const onValue = getReplacedComponent(onAttribute);

  if (featureState === 'on' && onValue) {
    node.replaceWithText(onValue);
  }

  if (featureState === 'off' && offValue) {
    node.replaceWithText(offValue);
  }
};

sourceFiles.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (isToggleFeatureFunction(node)) {
      replaceToggleFunction(node);
      return;
    }

    if (isToggleFeatureComponent(node)) {
      replaceToggleComponent(node);
    }
  });
});

project.saveSync();
