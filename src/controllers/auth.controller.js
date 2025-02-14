import { createUser, findUserByUsername, validatePassword } from '../models/user.model.js';
import { generateToken } from '../utils/jwt.js';

export const register = async (req, res) => {
  const { username, password } = req.body;
  const user = await createUser(username, password);
  res.status(201).json({ message: 'User registered', user });
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  const user = findUserByUsername(username);
  if (!user || !(await validatePassword(user, password))) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }
  const token = generateToken(user.id);
  res.json({ message: 'Login successful', token });
};
