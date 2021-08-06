const app = require('./app');

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Application running on port ${port} with ${process.env.NODE_ENV} envrioment`);
});
