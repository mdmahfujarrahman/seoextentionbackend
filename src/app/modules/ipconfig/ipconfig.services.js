import { Reader } from '@maxmind/geoip2-node';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const getIpConfig = async ip => {
  const currentDir = dirname(fileURLToPath(import.meta.url));
  const file = path.join(currentDir, './GeoIP2-Country.mmdb');
  const dbBuffer = fs.readFileSync(file);
  const reader = Reader.openBuffer(dbBuffer);
  const response = reader.country(ip);
  return response.country;
};

export const ipConfigService = {
  getIpConfig,
};
