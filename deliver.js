                                                                                 // ---PROBLEM---No.three! \\

        // ---function !--Start--!

function deliveryCost(tshirtQuantity) {

    const first100TshirtPrice = 100;
    const second100TshirtPrice = 80;

        //--- If tshirt-Quantity is not a number!

    if (typeof tshirtQuantity != 'number') {
        return 'Please,enter a number!!!';
    }

        //--- If tshirt-Quantity is a Negative number!

    else if (tshirtQuantity < 0) {
        return 'Please enter a positive number!!!';
    }

        //--- If tshirt-Quantity is Zero!

    else if (tshirtQuantity == 0) {
        return 'Sorry,you have not ordered anything!!!';
    }

        //--- If tshirt-Quantity is a Float number!

    else if (tshirtQuantity % 1 != 0) {
        return "Please, input an integer number!!!";
    }

        //--- When tshirt-Quantity is 1 to 100!

    else if (tshirtQuantity <= 100) {
        upto100TshirtPrice = tshirtQuantity * 100;
        return upto100TshirtPrice;
    }

        //--- When tshirt-Quantity is 100 to 200!

    else if (tshirtQuantity > 100 && tshirtQuantity <= 200) {
        upto100TshirtPrice = first100TshirtPrice * 100;
        upto200TshirtPrice = (tshirtQuantity - 100) * 80;
        const totalPrice = upto100TshirtPrice + upto200TshirtPrice;
        return totalPrice;

    }

        //--- when tshirt-Quantity is Greater than 200!

    else {
        upto100TshirtPrice = first100TshirtPrice * 100;
        upto200TshirtPrice = second100TshirtPrice * 100;
        restTshirtPrice = (tshirtQuantity - 200) * 50;
        totalPrice = upto100TshirtPrice + upto200TshirtPrice + restTshirtPrice;
        return totalPrice;

    }
}
        //--- function !--End--!

const tshirtQuantity = 000;
const result = deliveryCost(tshirtQuantity);
console.log(result);