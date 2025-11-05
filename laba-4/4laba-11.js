// Исходные данные клиентов
let customers = [
    {
        'id': 1,
        'f_name': 'Abby',
        'l_name': 'Thomas',
        'gender': 'M',
        'married': true,
        'age': 32,
        'expense': 300,
        'purchased': ['Shampoo', 'Toys', 'Book']
    },
    {
        'id': 2,
        'f_name': 'Jerry',
        'l_name': 'Tom',
        'gender': 'M',
        'married': true,
        'age': 64,
        'expense': 100,
        'purchased': ['Stick', 'Blade']
    },
    {
        'id': 3,
        'f_name': 'Dianna',
        'l_name': 'Cherry',
        'gender': 'F',
        'married': true,
        'age': 22,
        'expense': 1500,
        'purchased': ['lipstik', 'Nail Polish', 'Bag', 'Book']
    },
    {
        'id': 4,
        'f_name': 'Dev',
        'l_name': 'Currian',
        'gender': 'M',
        'married': false,
        'age': 28,
        'expense': 800,
        'purchased': ['Phone', 'Headphones']
    }
];

const originalCustomers = [...customers];

const container = document.createElement('div');
container.style.padding = '20px';

const marriedCheckbox = document.createElement('input');
marriedCheckbox.type = 'checkbox';
marriedCheckbox.id = 'marriedOnly';
marriedCheckbox.style.marginRight = '5px';

const marriedLabel = document.createElement('label');
marriedLabel.htmlFor = 'marriedOnly';
marriedLabel.textContent = 'Только состоящие в браке';
marriedLabel.style.marginRight = '15px';

const ageInput = document.createElement('input');
ageInput.type = 'number';
ageInput.placeholder = 'Введите возраст';
ageInput.style.marginRight = '10px';
ageInput.style.padding = '5px';

const filterBtn = document.createElement('button');
filterBtn.textContent = 'Удалить младше возраста';
filterBtn.style.marginRight = '10px';
filterBtn.style.padding = '5px 10px';

const resetBtn = document.createElement('button');
resetBtn.textContent = 'Сбросить таблицу';
resetBtn.style.padding = '5px 10px';

const tableContainer = document.createElement('div');

container.appendChild(marriedCheckbox);
container.appendChild(marriedLabel);
container.appendChild(ageInput);
container.appendChild(filterBtn);
container.appendChild(resetBtn);
container.appendChild(tableContainer);
document.body.appendChild(container);

function renderTable(customersArray) {
    tableContainer.innerHTML = '';
    
    const table = document.createElement('table');
    table.style.borderCollapse = 'collapse';
    table.style.marginTop = '20px';
    table.style.width = '100%';
    
    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');
    
    const headers = ['ID', 'Имя', 'Фамилия', 'Пол', 'Женат/Замужем', 'Возраст', 'Расходы', 'Покупки'];
    
    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        th.style.border = '1px solid #ccc';
        th.style.padding = '8px';
        headerRow.appendChild(th);
    });
    
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    const tbody = document.createElement('tbody');
    
    customersArray.forEach(customer => {
        const row = document.createElement('tr');
        
        const cells = [
            customer.id,
            customer.f_name,
            customer.l_name,
            customer.gender,
            customer.married ? 'Да' : 'Нет',
            customer.age,
            customer.expense,
            customer.purchased.join(', ')
        ];
        
        cells.forEach(cellData => {
            const td = document.createElement('td');
            td.textContent = cellData;
            td.style.border = '1px solid #ccc';
            td.style.padding = '8px';
            row.appendChild(td);
        });
        
        tbody.appendChild(row);
    });
    
    table.appendChild(tbody);
    tableContainer.appendChild(table);
}

function filterCustomers() {
    const maxAge = parseInt(ageInput.value);
    
    customers = [...originalCustomers];
    
    if (!isNaN(maxAge)) {
        customers = customers.filter(customer => customer.age >= maxAge);
    }
    
    if (marriedCheckbox.checked) {
        customers = customers.filter(customer => customer.married);
    }
    
    renderTable(customers);
}

function filterByMarriage() {
    customers = [...originalCustomers];
    
    if (marriedCheckbox.checked) {
        customers = customers.filter(customer => customer.married);
    }
    
    renderTable(customers);
}

function resetTable() {
    customers = [...originalCustomers];
    
    ageInput.value = '';
    marriedCheckbox.checked = false;
    
    renderTable(customers);
}

filterBtn.addEventListener('click', filterCustomers);
marriedCheckbox.addEventListener('change', filterByMarriage);
resetBtn.addEventListener('click', resetTable);

renderTable(customers);