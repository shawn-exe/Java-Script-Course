let totalCost = 0;
const costPerTicket = 9;
let finalAmount=0;
function calculateDiscount(seats,discount)
{
    let discountamt = (seats*costPerTicket)*(discount/100)
    return discountamt;  
}
function calculateCost(seats,discount) {
    if (seats <= 2) {
        totalCost = seats * costPerTicket;
        finalAmount+=totalCost 
    } else 
    if (seats >= 5) {
        return "Booking not allowed";
    } else {
        totalCost = (seats*costPerTicket)- calculateDiscount(seats,discount)
        finalAmount+=totalCost
    }
}
calculateCost(1,5)
calculateCost(2,7)
calculateCost(3,9)
calculateCost(4,11)
document.write(" 5% discount on Ticket 1<br>")
document.write(" 7% discount on Ticket 2<br>")
document.write(" 9% discount on Ticket 3<br>")
document.write("11% discount on Ticket 4<br><br>")
document.write("Amoount payable is: ",finalAmount,"<br>")