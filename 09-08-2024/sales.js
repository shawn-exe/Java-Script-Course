var numberSale=0;
var totalSale=0
export function buy(buyer,item){
    buyer.total+=item.price
}

export function sell(item){
    totalSale=totalSale+item.price
    numberSale=numberSale+1
    item.quantity=item.quantity-1;
    return 0;
}

export{numberSale,totalSale}