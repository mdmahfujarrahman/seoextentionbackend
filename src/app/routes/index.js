import express from 'express';
import { AutoMationRoutes } from '../modules/automation/automation.route.js';
import { IpConfigRouters } from '../modules/ipconfig/ipconfig.route.js';

const router = express.Router();

const routes = [
  {
    path: '/automation',
    router: AutoMationRoutes,
  },
  {
    path: '/ipconfig',
    router: IpConfigRouters,
  },
];

routes.forEach(route => {
  router.use(route.path, route.router);
});

export default router;
