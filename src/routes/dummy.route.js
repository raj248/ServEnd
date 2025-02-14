import express from 'express';
import { authenticate } from '../middlewares/auth.middleware.js';

const router = express.Router();

// In-memory "database" for dummy data
let dummyData = [
  { id: 1, name: 'Dummy Item 1' },
  { id: 2, name: 'Dummy Item 2' },
];

router.get('/', authenticate, (req, res) => {
  res.json([{ id: 1, name: 'Protected Dummy Item 1' }]);
});

// GET all dummy items
//router.get('/', (req, res) => {
//  res.json(dummyData);
//});

// GET a single dummy item by ID
router.get('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = dummyData.find((d) => d.id === id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// POST a new dummy item
router.post('/', (req, res) => {
  const newItem = {
    id: dummyData.length + 1,
    name: req.body.name,
  };
  dummyData.push(newItem);
  res.status(201).json(newItem);
});

// PUT (update) a dummy item by ID
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const item = dummyData.find((d) => d.id === id);
  if (item) {
    item.name = req.body.name;
    res.json(item);
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

// DELETE a dummy item by ID
router.delete('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = dummyData.findIndex((d) => d.id === id);
  if (index !== -1) {
    dummyData.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ message: 'Item not found' });
  }
});

export default router;
