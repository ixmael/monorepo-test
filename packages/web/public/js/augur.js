/**
 * This scripts emulate the flow of the augur service
 */

const augur = document.getElementById('c.js');
const cb = augur.dataset['cb'];

const run = eval(cb);

const fakeFingerprint = {
  IDs: {
    deviceID: 'fake_device_id',
    cookieID: 'fake_cookie_id',
  },
  version: '0.0.0',
  warpspeed: 'test',
  info: {
    DNT: false,
    PM: false,
    agent: {
      family: 'makos',
      major: '0.0.0',
      minor: '0.0.0',
      device: {
        name: 'test',
      },
      os: {
        name: 'lunux',
        major: '0.0.0',
        minor: '0.0.0',
        patch: '0.0.0',
      },
    },
    continent: 'NA',
    country: 'México',
    deviceTimezone: -5,
    extensionID: null,
    externalID: null,
    inTwoTimezones: false,
    isSpoofed: true,
    optOutNAI: false,
    proxy: false,
    tor: true,
  },
};

run(null, fakeFingerprint);
