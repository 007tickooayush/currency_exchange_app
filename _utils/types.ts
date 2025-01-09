export type CurrencyKey = 'AUD' |
    'BGN' |
    'BRL' |
    'CAD' |
    'CHF' |
    'CNY' |
    'CZK' |
    'DKK' |
    'EUR' |
    'GBP' |
    'HKD' |
    'HRK' |
    'HUF' |
    'IDR' |
    'ILS' |
    'ISK' |
    'JPY' |
    'KRW' |
    'MXN' |
    'MYR' |
    'NOK' |
    'NZD' |
    'PHP' |
    'PLN' |
    'RON' |
    'RUB' |
    'SEK' |
    'SGD' |
    'THB' |
    'TRY' |
    'USD' |
    'ZAR';
export type CurrencySingle = {
    [key in CurrencyKey]: Number
};
export type Currencies = {
    currencies: CurrencySingle[],
    exchange_day: String
};


/**
 * type to be used for single currency and tile components linked to it
 */
export interface CurrTile {
    target: string;
    base: string;
    value: Number | undefined;
    description?: string;
};