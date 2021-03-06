require('babel-core/register');

exports.config = {
  specs: [process.env.PROTRACTOR_SPECS || './test-files/**/*.e2e.js'],
  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.52.0.jar',
  directConnect: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      binary: '/usr/bin/google-chrome-stable',
      args: ['--lang=nl', '--window-size=1024,768', '--no-sandbox']
    }
  },
  jasmineNodeOpts: {
    isVerbose: true,
    print: function() {}
  },
  baseUrl: process.env.PROTRACTOR_BASE_URL,
  framework: 'jasmine',
  onPrepare: function() {
    browser.ignoreSynchronization = true;
    var SpecReporter = require('jasmine-spec-reporter');
    // add jasmine spec reporter
    jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'all'}));
  }
};
