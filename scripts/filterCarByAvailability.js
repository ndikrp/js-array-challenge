function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  for (let i = 0; i < cars.length; i++) {
    const current_car = cars[i];
    if (current_car.available) {
      result.push(current_car);
    }
  }
  console.log(result);
  console.table(result);
  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
