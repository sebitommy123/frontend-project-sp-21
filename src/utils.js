import data from './Data.json';
const currencyFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });

export function formatPrice(number) {

  return currencyFormat.format(number);

}

export function getListingById(id) {

  return data.listings.find(l => l.id == id);

}
