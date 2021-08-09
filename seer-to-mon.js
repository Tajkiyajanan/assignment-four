                                                                                // ---PROBLEM---No.One! \\

        // ---function !--Start--!

function seerToMon(seer) {

    //--- Check it- if input is not a number!

    if (typeof seer != 'number') {
        return 'Please,input a number!!!';
    }

    //--- Check it- if input is a Negative number!

    else if (seer < 0) {
        return 'Please,input a positive number!!!'
    }

    //--- When the customer order nothing!

    else if (seer == 0) {
        return 'Sorry,you have not ordered anything!!!'
    }

    //--- When input is a Positive number!

    else {
        const mon = seer / 40;
        return mon;
    }

}
//--- function !--End--!

const seer = 20;
const result = seerToMon(seer);
console.log(result);
