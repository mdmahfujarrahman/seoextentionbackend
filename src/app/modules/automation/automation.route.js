import express from 'express';
import { AutoMationController } from './automation.controller.js';
import validateRequst from '../../middleware/validateRequst.js';
import { automationValidation } from './automation.validation.js';
const router = express.Router();

router.patch(
  '/localfeatured',
  validateRequst(automationValidation.localfeaturedValidation),
  AutoMationController.startAutomation,
);

export const AutoMationRoutes = router;
