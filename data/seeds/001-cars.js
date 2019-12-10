
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { id: 1, VIN: '3GNEC12J07G121200', make: 'Chevrolet', model: 'Tahoe', mileage: 30432.49},
        { id: 2, VIN: '3FAHP0GAXCR193121', make: 'Ford', model: 'Ranger', mileage: 69032.32},
        { id: 3, VIN: '1G4CW54K814128657', make: 'Dodge', model: 'Charger', mileage: 23043.53},
      ]);
    });
};
