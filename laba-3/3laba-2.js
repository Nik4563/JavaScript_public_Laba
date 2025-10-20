let customers = [
   {
      'id': 1,
      'f_name': 'Abby',
      'l_name': 'Thomas',
      'gender': 'M',
      'married': true,
      'age': 32,
      'expense': 500,
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
      'purchased': ['Lipstik', 'Nail Polish', 'Bag', 'Book']
   },
   {
      'id': 4,
      'f_name': 'Dev',
      'l_name': 'Currian',
      'gender': 'M',
      'married': true,
      'age': 82,
      'expense': 90,
      'purchased': ['Book']
   },
   {
      'id': 5,
      'f_name': 'Maria',
      'l_name': 'Gomes',
      'gender': 'F',
      'married': false,
      'age': 7,
      'expense': 300,
      'purchased': ['Toys']
   }
];

// 1 number

const table = document.createElement('table');
const thead = document.createElement('thead');
const headerStr = document.createElement('tr');

const headers = ['id', 'f_name', 'l_name', 'gender', 'married', 'age', 'expense', 'purchased'];
headers.forEach(headText => {
    const th = document.createElement('th');
    th.textContent = headText;
    headerStr.appendChild(th);
})

thead.appendChild(headerStr);

const tbody = document.createElement('tbody');
customers.forEach(customer => {
    const row = document.createElement('tr');

    const idChel = document.createElement('td');
    idChel.textContent = customer.id;
    row.appendChild(idChel);

    const fNameChel = document.createElement('td');
    fNameChel.textContent = customer.f_name;
    row.appendChild(fNameChel);

    const lNameChel = document.createElement('td');
    lNameChel.textContent = customer.l_name;
    row.appendChild(lNameChel);

    const genderChel = document.createElement('td');
    genderChel.textContent = customer.gender;
    row.appendChild(genderChel);

    const marriedChel = document.createElement('td');
    marriedChel.textContent = customer.married;
    row.appendChild(marriedChel);

    const ageChel = document.createElement('td');
    ageChel.textContent = customer.age;
    row.appendChild(ageChel);

    const expenseChel = document.createElement('td');
    expenseChel.textContent = customer.expense;
    row.appendChild(expenseChel);

    const purchasedChel = document.createElement('td');
    purchasedChel.textContent = customer.purchased;
    row.appendChild(purchasedChel);

    tbody.appendChild(row);
});

table.appendChild(thead);
table.appendChild(tbody);

document.body.appendChild(table);

// 2 number

const rows = tbody.querySelectorAll('tr');

rows.forEach(row => {
    const purchase = row.querySelector('td:last-child');
    
    if (purchase.textContent.includes('Book')) {
        purchase.style.backgroundColor = 'red';
    }
});

