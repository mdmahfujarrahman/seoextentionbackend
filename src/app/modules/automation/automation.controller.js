import catchAsync from '../../shared/catchAsync.js';
import sendResponse from '../../shared/sendResponse.js';
import { AutoMationService } from './automation.service.js';

const startAutomation = catchAsync(async (req, res) => {
  const result = await AutoMationService.startAutomation(req.body);

  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Automation started successfully',
    data: result,
  });
});

export const AutoMationController = {
  startAutomation,
};
