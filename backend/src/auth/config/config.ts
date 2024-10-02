export default () => ({
  jwt: {
    secret: process.env.JWT_SECRET,
    expiryDate : process.env.JWT_EXPIRATION_TIME
  },
  database: {
    uri: process.env.MONGODB_URI,
  },
});
