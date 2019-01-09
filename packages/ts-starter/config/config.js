const CONFIGS = {
  DEV_SERVER_PORT: 3000,
  API_SERVER_URL_LOCAL: 'http://localhost:8080',
  API_SERVER_URL_SIT: ' https://up.api.income.com.sg',
  API_SERVER_URL_UAT: ' https://up.api.income.com.sg',
  API_SERVER_URL_PROD: 'https://up.api.income.com.sg',
  BASE_DEV: '/',
  BASE_PROD: '/',
  PROD_SOURCE_MAP: false,
  BROWSER_CACHE_DISABLED: true,
};

// TODO: change the env name following CI env name in future
CONFIGS.API_VERSION = process.env.API_VERSION || 'v1';

CONFIGS.API_URL = serverPreset => {
  return process.env.NODE_ENV === 'production'
    ? CONFIGS.API_SERVER_URL_PROD + CONFIGS.BASE_PROD
    : CONFIGS[`API_SERVER_URL_${serverPreset.toUpperCase()}`] +
        CONFIGS.BASE_DEV;
};

module.exports = CONFIGS;
