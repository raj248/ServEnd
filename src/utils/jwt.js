import jwt from 'jsonwebtoken';

const JWT_SECRET = 'easyhonepieseatshit';

export const generateToken = (userId) => {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
