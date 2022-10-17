import Big from "big.js";

const currenciesMap = {
  uah: { id: "uah", label: "UAH", usdRate: 36.76 },
  eur: { id: "eur", label: "EUR", usdRate: 1.02 },
  usd: { id: "usd", label: "USD", usdRate: 1 },
  zl: { id: "zl", label: "ZL", usdRate: 4.91 },
};

const currencies = Object.values(currenciesMap);

/** Replace with http requests to some API */
export const getCurrencies = () => {
  // mock of async request
  return Promise.resolve(currencies);
};

/**
 * Replace with http requests to some API
 *
 * @param {string} from
 * @param {string} to
 * @param {number} amount
 * @returns {Promise<number>}
 * */
export const convert = (from, to, amount) => {
  const fromCurrType = currenciesMap[from];
  const toCurrType = currenciesMap[to];
  // for accurate math calculations
  const result = Big(amount)
    .div(fromCurrType.usdRate)
    .mul(toCurrType.usdRate)
    .round(3);
  // mock of async request
  return Promise.resolve(result.toNumber());
};
