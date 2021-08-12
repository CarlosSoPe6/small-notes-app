const SALT_ROUNDS = parseInt(process.env.CRYPTO_SALT_ROUNDS || 10);

module.exports = {
  SALT_ROUNDS,
};
