// Cart calculation

// Update quantity
// add event to phone quantity plus button
document.getElementById('phone-plus').addEventListener('click', function() {
    // Update product quantity
    const quantity = updateQuantity('phone-quantity', true);
    
    // Update product total price
    updateProductTotal('phone-total', quantity, 1000);

    // Update total price
    updateTotal(10)
})
// add event to phone quantity minus button
document.getElementById('phone-minus').addEventListener('click', function() {
    // Update product quantity
    const quantity = updateQuantity('phone-quantity', false);

    // Update product total price
    updateProductTotal('phone-total', quantity, 1000);

    // Update total price
    updateTotal(10)

})




/*----------------------------------------------------------------*/




// add event to case quantity plus button
document.getElementById('case-plus').addEventListener('click', function() {
    // Update product quantity
    const quantity = updateQuantity('case-quantity', true);

    // Update product total price
    updateProductTotal('case-total', quantity, 59);

    // Update total price
    updateTotal(10)

})
// add event to case quantity minus button
document.getElementById('case-minus').addEventListener('click', function() {
    // Update product quantity
    const quantity = updateQuantity('case-quantity', false);

    // Update product total price
    updateProductTotal('case-total', quantity, 59);

    // Update total price
    updateTotal(10)

})








