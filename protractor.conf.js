require('babel-core/register');

exports.config = {
  specs: ['./test-files/**/*.e2e.js'],
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: '/usr/bin/google-chrome-stable',
      args: ['--lang=nl', '--window-size=1024,768', '--no-sandbox']
    }
  },
  baseUrl: process.env.PROTRACTOR_BASE_URL,
  framework: 'jasmine',
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  }
};
