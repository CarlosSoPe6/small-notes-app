function getSessionUser(req, res) {
  const { sessionUser: { username } } = req;
  res.json({username});
}

module.exports = {
  getSessionUser,
};
