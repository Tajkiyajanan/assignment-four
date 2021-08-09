                                                                            // ---PROBLEM---NO.four \\

        // ---function !--Start--!

function perfectFriend(friends) {

    let fiveCharacterName = 'You have no perfect friend!!!';
    if (typeof friends == 'object') {

        for (const friend of friends) {
            if (friend.length == 5) {
                fiveCharacterName = friend;
                break;
            }
        }
        return fiveCharacterName;
    }

        //-- Error handling if there is invalid input!

    else {
        return 'Please,Enter your all friends name in an array!!!';
    }


}
// ---function !--End--!

const friends = [12345, 'Janan', true, 'Sumaiya', -1, 'Mizan', 'Rasel', 'Kanij'];
const result = perfectFriend(friends);
console.log(result);