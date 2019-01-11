export const get = (key: string, fallback: string = ''): string => process.env[key] || fallback;
export const isDevelopment: boolean = get('NODE_ENV') !== 'production';
export const isProduction: boolean = !isDevelopment;
