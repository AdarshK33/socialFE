const {

  BASE_SERVICE_URL,
 
  SOCAILSESSION,
  SOCAILSESSION_COOKIE_PASSWORD,
  SOCAILSESSION_TIMEOUT,
} = process.env;

module.exports = {
  reactStrictMode: true,
  env: {
  
    BASE_SERVICE_URL,
    SOCAILSESSION,
    SOCAILSESSION_COOKIE_PASSWORD,
    SOCAILSESSION_TIMEOUT,
  },
  images: {
    domains: [
      "localhost",
      "",
    ],
  },
};
