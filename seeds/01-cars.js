
exports.seed = async function(knex) {
  const testData = [
    { VIN: "ABCDEFGHIJ1234567", make: "Nissan", model: "Sentra", mileage: "90000", transmissionType: "automatic", titleStatus: "very legit" },
    { VIN: "DH13542HG39DJSI82", make: "Toyota", model: "Prius", mileage: "123456", transmissionType: "automatic", titleStatus: "clean" },
    { VIN: "WF26789CHKK086543", make: "Acura", model: "RSX", mileage: "234564", transmissionType: "automatic", titleStatus: "clean" },
    { VIN: "WGJ5890HHFD654467", make: "Toyota", model: "Tacoma", mileage: "345674", transmissionType: "manual", titleStatus: "salvage" },
  ];

  await knex('cars').truncate()

  // Inserts seed entries
  return knex('cars').insert(testData);
};
