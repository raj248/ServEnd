import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API!',
    instructions: {
      home: 'GET / - Returns API instructions',
      auth: {
        register: 'POST /auth/register - Register a new user',
        login: 'POST /auth/login - Login and get a JWT token',
      },
      dummy: {
        getAll: 'GET /dummy - Returns a list of dummy items (protected)',
      },
    },
  });
});

router.get('/', (req, res) => {
  res.json({
    message: 'Welcome to the API!',
    instructions: {
      home: 'GET / - Returns API instructions',
      dummy: {
        getAll: 'GET /dummy - Returns a list of dummy items',
        getById: 'GET /dummy/:id - Returns a single dummy item by ID',
        create: 'POST /dummy - Creates a new dummy item',
        update: 'PUT /dummy/:id - Updates a dummy item by ID',
        delete: 'DELETE /dummy/:id - Deletes a dummy item by ID',
      },
    },
  });
});

export default router;
