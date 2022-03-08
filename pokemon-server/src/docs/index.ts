import { userPath } from './paths';
import { userSchema } from './schemas';

export default {
  openapi: '3.0.0',
  info: {
    title: 'CITI+ API',
    description: 'API para as aplicações de CITI+',
    version: '0.0.1',
  },
  servers: [
    {
      url: 'http://localhost:3001',
      description: 'Local Server',
    },
  ],
  paths: {
    ...userPath,
  },
  components: {
    schemas: {
      user: userSchema,
    },
  },
};
