export function saveCurrencySettings(settings) {
    localStorage.setItem('currency_settings', JSON.stringify(settings));
}

export function loadCurrencySettings() {
    const saved = localStorage.getItem('currency_settings');
    if (saved) {
        return JSON.parse(saved);
    }
    return { from: 'USD', to: 'RUB', amount: '1' };
}

export function cacheExchangeRates(ratesData) {
    const cache = {
        data: ratesData,
        timestamp: Date.now()
    };
    localStorage.setItem('currency_cache', JSON.stringify(cache));
}

export function loadCachedRates() {
    const saved = localStorage.getItem('currency_cache');
    if (saved) {
        const cache = JSON.parse(saved);
        const cacheAge = Date.now() - cache.timestamp;
        if (cacheAge < 3600000) {
            return cache.data;
        }
    }
    return null;
}