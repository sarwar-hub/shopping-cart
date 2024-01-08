// Functions



// Update product quantity
/*
The function updateQuantity() updates the quantity of product. first parameter is quantity container id and second one is a boolean parameter that defines increase or decrease instead of true of false. The function will change the quantity and also returns chaged value.
*/
function updateQuantity(containerId, isPlus) {
    const container = document.getElementById(containerId);
    const stringValue = container.value;
    const value = parseInt(stringValue);
    
    let changedValue;
    if (isPlus === true) { // if value of isPlus is true, the quantity will increase.
        changedValue = value + 1;
    } else {
        changedValue = value - 1;
    }

    container.value = changedValue;
    return changedValue;
}




// Upadate Product total price
/**
 * containerId = where should be update
 * quantity = product quantity
 * unitPrice = every product price
*/
function updateProductTotal(containerId, quantity, unitPrice) {
    const productTotal = quantity * unitPrice;
    let productTotalContainer = document.getElementById(containerId);
    productTotalContainer.innerText = productTotal;
}




// get value from element
function getValueById(containerId) {
    const container = document.getElementById(containerId);
    const string = container.innerText;
    const value = parseFloat(string);
    return value;
}


// set value to container
function setValueById(containerId, total) {
    const totalContainer = document.getElementById(containerId);
    totalContainer.innerText = total;
}

// Update total price
function updateTotal(taxInPercent) {
    // get value by id
    const phoneTotal = getValueById('phone-total'); 
    const caseTotal = getValueById('case-total'); 

    /// get total value
    const totalPrice = phoneTotal + caseTotal;
    
    // set total value
    setValueById('total', totalPrice);

    // Calculate tax
    const unitIn100 = totalPrice/100;
    const taxString = (unitIn100*taxInPercent).toFixed(2);
    const tax = parseFloat(taxString);

    // get subtotal with tax
    const subTotal = totalPrice + tax;

    // set subtotal, tax, taxText to their container
    setValueById('sub-total', subTotal);
    setValueById('tax', tax);
    setValueById('taxText', taxInPercent);
}
