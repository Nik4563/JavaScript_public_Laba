import { 
    CURRENCIES, 
    fetchExchangeRates, 
    convertCurrency,
    getExchangeRate 
} from './api.js';

import { 
    saveCurrencySettings, 
    loadCurrencySettings,
    cacheExchangeRates,
    loadCachedRates 
} from './storage.js';

let amountInput, fromSelect, toSelect, resultText, rateInfo, refreshBtn, swapBtn;
let currentRates = null;

async function init() {
    amountInput = document.getElementById('amount');
    fromSelect = document.getElementById('fromCurrency');
    toSelect = document.getElementById('toCurrency');
    resultText = document.getElementById('resultText');
    rateInfo = document.getElementById('rateInfo');
    refreshBtn = document.getElementById('refreshBtn');
    swapBtn = document.getElementById('swapBtn');
    
    const settings = loadCurrencySettings();
    
    CURRENCIES.forEach(currency => {
        const option = `<option value="${currency.code}">${currency.code}</option>`;
        fromSelect.innerHTML += option;
        toSelect.innerHTML += option;
    });
    
    amountInput.value = settings.amount || '1';
    fromSelect.value = settings.from;
    toSelect.value = settings.to;
    
    await loadExchangeRates();
    
    setupEventListeners();
    
    updateConversion();
}

function setupEventListeners() {
    amountInput.addEventListener('input', updateConversion);
    fromSelect.addEventListener('change', onCurrencyChange);
    toSelect.addEventListener('change', onCurrencyChange);
    
    refreshBtn.addEventListener('click', async () => {
        await loadExchangeRates();
        updateConversion();
    });
    
    swapBtn.addEventListener('click', swapCurrencies);
}

async function loadExchangeRates() {
    try {
        const cachedRates = loadCachedRates();
        
        if (cachedRates) {
            currentRates = cachedRates;
        } else {
            currentRates = await fetchExchangeRates('USD');
            cacheExchangeRates(currentRates);
        }
    } catch (error) {
        console.error('Ошибка:', error);
    }
}

function onCurrencyChange() {
    saveSettings();
    updateConversion();
}

function saveSettings() {
    const settings = {
        from: fromSelect.value,
        to: toSelect.value,
        amount: amountInput.value
    };
    
    saveCurrencySettings(settings);
}

function swapCurrencies() {
    const temp = fromSelect.value;
    fromSelect.value = toSelect.value;
    toSelect.value = temp;
    
    saveSettings();
    updateConversion();
}

function updateConversion() {
    if (!currentRates) {
        resultText.textContent = 'Загрузка...';
        rateInfo.textContent = '';
        return;
    }
    
    const amount = parseFloat(amountInput.value) || 0;
    const fromCurrency = fromSelect.value;
    const toCurrency = toSelect.value;
    
    const convertedAmount = convertCurrency(
        amount,
        fromCurrency,
        toCurrency,
        currentRates.rates
    );
    
    const exchangeRate = getExchangeRate(
        fromCurrency,
        toCurrency,
        currentRates.rates
    );
    
    resultText.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    rateInfo.textContent = `1 ${fromCurrency} = ${exchangeRate.toFixed(4)} ${toCurrency}`;
}

document.addEventListener('DOMContentLoaded', init);