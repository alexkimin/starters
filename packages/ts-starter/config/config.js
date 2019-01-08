// TODO: update to income domain
// TODO: check base url of production
const CONFIGS = {
  DEV_SERVER_PORT: 3000,
  API_SERVER_URL_LOCAL: 'http://localhost:8080',
  API_SERVER_URL_SIT: 'http://localhost:8080',
  API_SERVER_URL_UAT: 'http://localhost:8080',
  API_SERVER_URL_PROD: 'http://localhost:8080',
  BASE_DEV: '/',
  BASE_PROD: '/',
  PROD_SOURCE_MAP: false,
  BROWSER_CACHE_DISABLED: true,
};

// TODO: change the env name following CI env name in future
const API_VERSION = process.env.API_VERSION || 'v1';

CONFIGS.API_URL = serverPreset => {
  return process.env.NODE_ENV === 'production'
    ? CONFIGS.API_SERVER_URL_PROD + CONFIGS.BASE_PROD + API_VERSION
    : CONFIGS[`API_SERVER_URL_${serverPreset.toUpperCase()}`] +
        CONFIGS.BASE_DEV +
        API_VERSION;
};

module.exports = CONFIGS;
