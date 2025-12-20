// config.js - Configuration file for API endpoints and keys
const CONFIG = {
  API: {
    NGO_BASE_URL: 'http://34.180.45.24:3000/api/v1/ngo_master/getAll',
    REQUESTS_BASE_URL: 'http://34.180.45.24:3000/api/v1/requests/getAll',
    SHAYAKA_BASE_URL: 'http://34.180.45.24:3000/api/v1/score_history/get/topScorers',
    IMAGE_BASE_URL: 'http://34.180.45.24:3000/resources/',
  },
  FORM: {
    WEB3FORMS_KEY: 'f71038d2-9598-4603-85bc-1df76b440733'
  }
};

// For production, you can override these with environment variables
if (typeof window !== 'undefined' && window.ENV) {
  Object.assign(CONFIG.API, window.ENV.API || {});
  Object.assign(CONFIG.FORM, window.ENV.FORM || {});
}