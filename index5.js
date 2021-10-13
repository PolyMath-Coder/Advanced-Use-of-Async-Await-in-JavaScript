let stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts'],
};

const is_shop_open = false;

function time(ms) {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(resolve, ms);
    } else {
      reject(console.log('The shop is closed for the day.'));
    }
  });
}

async function kitchen() {
  try {
    await time(2000);
    console.log(`Our choie of fruit is ${stocks.Fruits[2]}!`);

    await time(0000);
    console.log('Start the production!');

    await time(2000);
    console.log('Cut the fruit');

    await time(1000);
    console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added. `);

    await time(1000);
    console.log('Start the machine');

    await time(2000);
    console.log('Icecream placed on cone!');

    await time(1000);
    console.log(`The ${stocks.toppings[1]} is served.`);
  } catch (error) {
    console.log('Customer left', error);
  } finally {
    console.log('The day is Ended... The shop is closed!');
  }
}

kitchen();
