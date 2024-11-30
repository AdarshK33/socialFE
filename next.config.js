const {

  AUTH_SERVICE_URL,
 
  PIMSESSION,
  PIM_COOKIE_PASSWORD,
  PIMSESSION_TIMEOUT,
} = process.env;

module.exports = {
  reactStrictMode: true,
  env: {
  
    AUTH_SERVICE_URL,
    PIMSESSION,
    PIM_COOKIE_PASSWORD,
    PIMSESSION_TIMEOUT,
  },
  images: {
    domains: [
      "",
      "",
    ],
  },
};
