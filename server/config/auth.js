const JWT_ALGORITHM = process.env.JWT_ALGORITHM || 'HS256';
const JWT_AUDIENCE = process.env.JWT_ALGORITHM || '*';
const JWT_ISSUER = process.env.JWT_ISSUER || '*';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || (15*60*1000);
const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-string';
const JWT_TOKEN_TYPE = 'bearer'; 

module.exports = {
  JWT_ALGORITHM,
  JWT_AUDIENCE,
  JWT_EXPIRES_IN,
  JWT_ISSUER,
  JWT_SECRET,
  JWT_TOKEN_TYPE
}
