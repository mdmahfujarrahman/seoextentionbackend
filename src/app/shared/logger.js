import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  const date = new Date(timestamp);
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const ampm = hour >= 12 ? 'pm' : 'am';
  return `${date.toDateString()} ${hour}:${minutes}:${seconds} ${ampm}  [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  level: 'info',
  format: combine(label({ label: 'SEO Aotomation' }), timestamp(), myFormat),
  transports: [new transports.Console()],
});

const errorLogger = createLogger({
  level: 'error',
  format: combine(label({ label: 'SEO Aotomation' }), timestamp(), myFormat),
  transports: [new transports.Console()],
});

export { logger, errorLogger };
