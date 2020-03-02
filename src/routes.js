import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json("i'm alive");
});

export default routes;
