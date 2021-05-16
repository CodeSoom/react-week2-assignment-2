// eslint-disable-next-line import/no-extraneous-dependencies
const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// HEADLESS=true npx codecept run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './test/*_test.js',
  output: './output',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080',
      show: true,
      windowSize: '1200x900',
    },
  },
<<<<<<< HEAD
  include: {
    I: './steps_file.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'assignment-1-1',
=======
  bootstrap: null,
  mocha: {},
  name: 'assignment-1-2',
>>>>>>> e2cf02a46d2ef9a266926e68b6a8f6da19c8aa71
  plugins: {
    retryFailedStep: {
      enabled: true,
    },
    screenshotOnFail: {
      enabled: true,
    },
  },
};
