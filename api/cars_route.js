const express = require('express');
const db = require('../data/db');
const router = express.Router();


// GET
router.get('/', (req, res) => {
   db('cars')
      .then(cars => {
         res.status(200).json(cars);
      })
      .catch(error => {
         res.status(500).json({ message: 'Problem retrieving cars' });
      })
})

// POST
router.post('/', (req, res) => {
   const newCar = req.body;

   db('cars')
      .insert(newCar, "id")
      .then(ids => {
         const carId = ids[0];

         return db('cars')
            .select("id", "VIN", "make", "model", "mileage")
            .where({ id: carId })
            .first()
            .then(car => {
               res.status(201).json(car);
            })
      })
      .catch(error => {
         res.status(500).json({ message: 'Problem adding the car' });
      })

})

// DELETE
router.delete('/:id', (req, res) => {
   const carId = req.params.id;

   db('cars')
      .where({ id: carId })
      .del()
      .then(count => {
         if (count > 0) {
            res.status(200).json(count);
         } else {
            res.status(404).json({ message: "Unable to find car by that id." });
         }
      })
      .catch(error => {
         res.status(500).json({ message: 'Problem deleting the car' });
      })
})

// PUT
router.put('/:id', (req, res) => {
   const carId = req.params.id;
   const updates = req.body;

   db('cars')
      .where({ id: carId })
      .update(updates)
      .then(count => {
         if (count > 0) { // Validation
            res.status(200).json(count);
         } else {
            res.status(400).json({ message: "Car could not be deleted." });
         }
      })
      .catch(error => {
         res.status(500).json({ message: 'Problem updating the car' });
      })
})

module.exports = router;