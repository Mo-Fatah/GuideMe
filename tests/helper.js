const initialRestaurants = [
  {
    name: 'Falah',
    governorate: 'alex',
    city: 'alex',
    neighborhood: 'sidi bishr',
    address: 'sidi bishr kebly',
    foodTypes: ['koshary'],
  },
  {
    name: 'Abo Ali',
    governorate: 'mansora',
    city: 'mansora city',
    neighborhood: 'idk',
    address: 'who knows',
    foodTypes: ['kebda'],
  },
];
const sleep = async (ms) => {
  await setTimeout(() => {}, ms);
}
module.exports = {
  initialRestaurants,
};
