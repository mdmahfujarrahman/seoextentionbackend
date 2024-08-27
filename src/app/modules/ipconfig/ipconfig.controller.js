import catchAsync from '../../shared/catchAsync.js';
import sendResponse from '../../shared/sendResponse.js';
import { ipConfigService } from './ipconfig.services.js';

const getIpConfig = catchAsync(async (req, res) => {
  console.log(req.ip);
  const result = await ipConfigService.getIpConfig(req.ip);
  sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Ipconfig successfully fetched',
    data: result,
  });
});

export const IpConfigController = {
  getIpConfig,
};
