exports.config = {
  framework: 'mocha',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['tests/integration/tests.js'],
  capabilities: {
  'browserName': 'chrome',
  'binary': '/usr/bin/chromium'
}
};
