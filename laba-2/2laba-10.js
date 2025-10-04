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

let customersWithFullName = customers.map(customer => {
    return {
        ...customer,
        'full_name': `${customer.f_name} ${customer.l_name}`
    };
});

let result = "Клиенты с полными именами:\n";
customersWithFullName.forEach(customer => {
    result += `ID: ${customer.id}, Полное имя: ${customer.full_name}, Возраст: ${customer.age}\n`;
});

alert(result);
return customersWithFullName;
