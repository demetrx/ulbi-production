// import * as process from 'process';
import * as commonCommands from './commands/common';
import * as profileCommands from './commands/profile';
import * as articleCommands from './commands/article';

Cypress.Commands.addAll(commonCommands);
Cypress.Commands.addAll(profileCommands);
Cypress.Commands.addAll(articleCommands);
// Cypress.Commands.overwrite('intercept', () => {
//   const { FIXTURE_MODE } = process.env;
//   const fixtureName = req.METHOD + req.url + hash(req.body);
//
//   if (FIXTURE_MODE === 'READ') {
//     readFixture(fixtureName);
//   }
//
//   if (FIXTURE_MODE === 'WRITE') {
//     createFixture(fixtureName);
//   }
//
//   if (FIXTURE_MODE === 'API') {
//     createFixture(fixtureName);
//   }
// });
