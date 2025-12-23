export const CURRENCIES = [
    { code: 'USD', name: 'Доллар США' },
    { code: 'EUR', name: 'Евро' },
    { code: 'RUB', name: 'Российский рубль' },
    { code: 'GBP', name: 'Фунт стерлингов' },
    { code: 'JPY', name: 'Японская иена' }
];

export async function fetchExchangeRates(baseCurrency = 'USD') {
    const response = await fetch(`https://open.er-api.com/v6/latest/${baseCurrency}`);
    
    if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.result !== 'success') {
        throw new Error('API ошибка');
    }
    
    return {
        base: data.base_code,
        rates: data.rates
    };
}

export function convertCurrency(amount, fromCurrency, toCurrency, rates) {
    if (!rates || !rates[fromCurrency] || !rates[toCurrency]) {
        throw new Error('Нет курсов');
    }
    
    if (fromCurrency === rates.base) {
        return amount * rates[toCurrency];
    }
    
    if (toCurrency === rates.base) {
        return amount / rates[fromCurrency];
    }
    
    const amountInBase = amount / rates[fromCurrency];
    return amountInBase * rates[toCurrency];
}

export function getExchangeRate(fromCurrency, toCurrency, rates) {
    if (fromCurrency === toCurrency) return 1;
    
    return convertCurrency(1, fromCurrency, toCurrency, rates);
}