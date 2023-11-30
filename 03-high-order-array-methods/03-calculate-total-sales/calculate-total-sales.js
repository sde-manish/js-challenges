function calculateTotalSalesWithTax(products, taxRate) {
   
    // const priceArr = []

    // products.forEach(product => {
    //     priceArr.push(product.price*product.quantity)
    // });
    
    // const totalsale = priceArr.reduce((acc, currVal) => acc + currVal, 0)

    // const tax = (totalsale*taxRate)/100

    // return totalsaleWithtax = totalsale + tax


// Writing in more optimized way
// return totalSalewithTax = products.reduce((acc, currEle)=> acc + currEle.price*currEle.quantity, 0) + 
// ((products.reduce((acc, currEle)=> acc + currEle.price*currEle.quantity, 0))*taxRate)/100;

// OR
const totalsale = products.reduce((acc, currEle)=> acc + currEle.price*currEle.quantity, 0)

return totalsale + (totalsale*taxRate)/100
}

module.exports = calculateTotalSalesWithTax;
