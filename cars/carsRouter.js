const express = require('express');

const db = require('../data/connection.js');

const router = express.Router();

// GET all accounts

router.get('/', (req, res) => {
  db('cars')
    .then(cars => {
      res.json(cars);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Failed to retrieve cars',
      });
    });
});

// GET all accounts by ID

router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('cars')
    .where({ id })
    .first()
    .then(car => {
      res.json(car);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Failed to retrieve car',
      });
    });
});

// POST a new account

router.post('/', (req, res) => {
  const carData = req.body;

  db('cars')
    .insert(carData)
    .then(ids => {
      db('cars')
        .where({ id: ids[0] })
        .then(newCar => {
          res.status(201).json(newCar);
        });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        message: 'Failed to store data',
      });
    });
});

// UPDATE an account

router.put('/:id', (req, res) => {
  const changes = req.body;

  db('cars')
    .where({ id: req.params.id })
    .update(changes)
    .then(count => {
      if(count > 0) {
        res.status(200).json({
          message: 'Car information updated successfully',
        });
      } else {
        res.status(404).json({
          message: 'Car not found',
        });
      };
    })
    .catch(err => {
      console.log('PUT error', err);
      res.status(500).json({
        message: 'ERROR!',
      });
    });
});

// DELETE an account

router.delete('/:id', (req, res) => {
  db('cars')
    .where({ id: req.params.id })
    .del()
    .then(count => {
      if(count > 0) {
        res.status(200).json({
          message: 'Car information removed',
        });
      } else {
        res.status(404).json({
          message: 'Car not found',
        });
      };
    })
    .catch(err => {
      console.log('DELETE error', err);
      res.status(500).json({
        message: 'ERRORR!',
      });
    });
});

module.exports = router;