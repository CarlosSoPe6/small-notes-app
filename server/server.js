import { listen } from './app';

const port = process.env.PORT || 3000;

listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Application running on port ${port} with ${process.env.NODE_ENV} envrioment`);
});
