import { Project, SyntaxKind, Node } from 'ts-morph';

const featureNameToRemove = process.argv[2]; // isArticleEnabled
const featureState = process.argv[3]; // on/off

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
    if (child.isKind(SyntaxKind.Identifier) && child.getText() === 'toggleFeature') {
      isToggleFeature = true;
    }
  });

  return isToggleFeature;
}

sourceFiles.forEach((sourceFile) => {
  sourceFile.forEachDescendant((node) => {
    if (!isToggleFeatureFunction(node)) return;

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
  });
});

project.saveSync();
