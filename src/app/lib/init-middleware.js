import Cors from 'cors';

// Initialize the cors middleware
const cors = Cors({
  methods: ['GET','HEAD','POST','PUT','DELETE','PATCH'],
  origin: '*',
  credentials: true,
});

export default function initMiddleware(req, res, next) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}