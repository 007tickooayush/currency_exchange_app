export type Currencies = {
    AUD: Number,
    BGN: Number,
    BRL: Number,
    CAD: Number,
    CHF: Number,
    CNY: Number,
    CZK: Number,
    DKK: Number,
    EUR: Number,
    GBP: Number,
    HKD: Number,
    HRK: Number,
    HUF: Number,
    IDR: Number,
    ILS: Number,
    ISK: Number,
    JPY: Number,
    KRW: Number,
    MXN: Number,
    MYR: Number,
    NOK: Number,
    NZD: Number,
    PHP: Number,
    PLN: Number,
    RON: Number,
    RUB: Number,
    SEK: Number,
    SGD: Number,
    THB: Number,
    TRY: Number,
    USD: Number,
    ZAR: Number,
    exchange_day: String
};


/**
 * type to be used for single currency and tile components linked to it
 */
export interface CurrTile {
    target: string;
    base: string;
    value: number;
    description?: string;
};