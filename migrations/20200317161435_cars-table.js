
exports.up = function(knex) {
  // the change we want to make to our schema
  return knex.schema.createTable("cars", tbl => {
    tbl.increments();

    tbl.string("VIN", 17)
      .unique()
      .notNullable();

    tbl.string("make", 64)
      .notNullable();

    tbl.string("model", 64)
      .notNullable();

    tbl.integer("mileage")
      .notNullable();

    tbl.string("transmissionType", 64);

    tbl.string("titleStatus", 64);
  });
};

exports.down = function(knex) {
  // undoing that change
  return knex.schema.dropTableIfExists("cars");
};
