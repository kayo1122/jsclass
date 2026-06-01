// STEP 1: Declare and initialize variables

// STEP 1a: Grab the parts of the DOM that we need to build the invoice
const productList = document.querySelector('tbody');
const totalData = document.querySelector('tfoot td');

// STEP 1b: Build the products array in the format 'Product Name:0.00'
const products = [
    'Widget A:9.99',
    'Widget B:14.49',
    'Widget C:4.99',
    'Widget D:22.00'
];

// STEP 1c: Set up invoiceTotal variable - start at zero
let invoiceTotal = 0;

// STEP 1d: Declare the itemRow and the itemDetail array
let itemRow;
let itemDetail;

// STEP 2: Build a loop to iterate through the products array
for (let i = 0; i < products.length; i++) {

    // STEP 3: Break apart the product name from the price for each item with split()
    itemDetail = products[i].split(':');

    // STEP 4: Set the second array element to the product price (as type number)
    itemDetail[1] = parseFloat(itemDetail[1]);

    // STEP 5: Add the price of this product to the invoice total
    invoiceTotal += itemDetail[1];

    // STEP 6: Capture each product name and price as variables
    const itemName = itemDetail[0];
    const itemPrice = itemDetail[1];

    // STEP 7: Create a TR element for this product and price in the invoice table
    itemRow = document.createElement('tr');

    // STEP 8: Build the string that contains two TD elements
    const rowContent = `<td>${itemName}</td><td>$${itemPrice.toFixed(2)}</td>`;

    // STEP 9: Set the string as innerHTML of the new TR, then append to tbody
    itemRow.innerHTML = rowContent;
    productList.appendChild(itemRow);
}

// STEP 10: Set the total cost rounded to two decimal places
totalData.textContent = `$${invoiceTotal.toFixed(2)}`;
