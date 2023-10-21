import express from 'express';
import { IpConfigController } from './ipconfig.controller.js';

const router = express.Router();

router.get('/', IpConfigController.getIpConfig);

export const IpConfigRouters = router;
