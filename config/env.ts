const env = (process.env.ENV || 'qa') as keyof typeof configMap;

const configMap = {
  qa: {
    baseUrl: 'https://dummyjson.com',
    username: 'emilys',
    password: 'emilyspass',
    tokenExpiry: 30
  },
  dev: {
    baseUrl: 'https://dummyjson.com',
    username: 'emilys',
    password: 'emilyspass',
    tokenExpiry: 30
  }
};

export const config = configMap[env];