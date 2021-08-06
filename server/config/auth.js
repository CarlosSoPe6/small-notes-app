export const JWT_ALGORITHM = process.env.JWT_ALGORITHM || 'HS256';
export const JWT_AUDIENCE = process.env.JWT_ALGORITHM || '*';
export const JWT_ISSUER = process.env.JWT_ISSUER || '*';
export const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || (15*60*1000);
export const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-string';
export const JWT_TOKEN_TYPE = 'bearer'; 
