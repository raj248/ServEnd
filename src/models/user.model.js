import bcrypt from 'bcryptjs';

const users = [];

export const createUser = async (username, password) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, username, password: hashedPassword };
  users.push(user);
  return user;
};

export const findUserByUsername = (username) => {
  return users.find((user) => user.username === username);
};

export const validatePassword = async (user, password) => {
  return await bcrypt.compare(password, user.password);
};
