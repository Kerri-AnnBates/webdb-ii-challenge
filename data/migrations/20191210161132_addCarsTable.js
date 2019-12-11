
exports.up = function(knex) {
  
   return knex.schema.createTable('cars', (tbl) => {
      tbl.increments();
      tbl
         .text('VIN', 17)
         .notNullable()
         .unique();
      tbl
         .text('make', 128)
         .notNullable();
      tbl
         .text('model', 128)
         .notNullable();
      tbl
         .float('mileage')
         .notNullable();
      tbl.text('transmission_type', 128);
      tbl.text('status_of_title', 128);
   });
   
};

exports.down = function(knex) {
   return knex.schema.dropTableIfExists('cars');
};
