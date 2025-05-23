const { awscdk } = require('projen');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'Harsh Rohila',
  authorAddress: 'rohilaharsh@gmail.com',
  cdkVersion: '2.59.0', /* First release of 2023 */
  defaultReleaseBranch: 'master',
  name: 'cdk-secure-parameter-store-cdk2',
  repositoryUrl: 'https://github.com/HarshRohila/cdk-secure-parameter-store.git',
  bundledDeps: ['aws-sdk'],
  // cdkTestDependencies: undefined,  /* AWS CDK modules required for testing. */
  peerDeps: ['constructs', 'aws-cdk-lib'],
  // description: undefined,          /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: ['aws-cdk-lib'],
  keywords: ['cdk', 'parameter store', 'secure parameter store'],
  scripts: {
    'dev:deploy': "yarn build && npx cdk deploy --app='./lib/integ.default.js'",
  },
  gitignore: ['cdk.out'],
  // packageName: undefined,          /* The "name" in package.json. */
  // release: undefined,              /* Add release management to this project. */
});
project.synth();
