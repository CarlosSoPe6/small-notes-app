const HTTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHN: 401,
  NOT_FOUND: 404,
  TEAPOD: 418,
  INTERNAL_ERROR: 500
};

const ERROR_MESSAGES = {
  badRequest: () => 'El fomulario enviado tiene errores',
  userNotFound: () => 'No existe el usuario',
  error: () => 'Error desconocido, contacte al admin',
}

module.exports = {
  HTTTP_STATUS_CODES,
  ERROR_MESSAGES,
};
