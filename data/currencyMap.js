export const currencies = {
  australia: "AUD",
  "us-usa": "USD",
  uk: "GBP",
  denmark: "DKK",
  cyprus: "EUR",
  china: "CNY",
  canada: "CAD",
  hungary: "HUF",
  ireland: "EUR",
  italy: "EUR",
  japan: "JPY",
  finland: "EUR",
  france: "EUR",
  germany: "EUR",
  hongkong: "HKD",
  indonesia: "IDR",
  lebanon: "LBP",
  newzealand: "NZD",
  malta: "EUR",
  malaysia: "MYR",
  netherlands: "EUR",
  "south-africa": "ZAR",
  "sri-lanka": "LKR",
  switzerland: "CHF",
  taiwan: "TWD",
  singapore: "SGD",
  spain: "EUR",
  uae: "AED",
};

export function getCurrencyCode(name) {
  return currencies[name.toLowerCase()];
}
