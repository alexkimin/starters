// TODO: update to income domain
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

CONFIGS.API_URL =
  process.env.NODE_ENV === 'production'
    ? CONFIGS.API_SERVER_URL_PROD + CONFIGS.BASE_PROD
    : CONFIGS.API_SERVER_URL_LOCAL + CONFIGS.BASE_DEV;

module.exports = CONFIGS;
