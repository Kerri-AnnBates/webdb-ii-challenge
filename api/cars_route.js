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

module.exports = router;