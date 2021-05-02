'use strict';

let seattleShop = {
    minhc: 23,
    maxhc: 65,
    aveCpc: 6.3,
    numOfchour:0,
    amofcookpufhr:0,

    randomCustomer: function () {
        this.numOfchour = randomCust(23, 65) + ' Customer';
         console.log(seattleShop.numOfchour);
    },

    amofcookpufhrfunction: function () {
        
        this.amofcookpufhr = gggggggg((randomCust(23, 65)) ,seattleShop.numOfchour) 
        console.log(seattleShop.amofcookpufhr);
       



    },


}
seattleShop.randomCustomer();
seattleShop.amofcookpufhrfunction();
// seattleShop.amofcookpufhrfunction();

function gggggggg(j,u) {
    return j * u
    
}



function randomCust(min, max) {

    return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is exclusive and the minimum is inclusive

}






//  numOfchour = seattleShop.randomCustomer();
//  seattleShop.amofcookpufhr = amofcookpufhrfunction();
//  console.log(seattleShop.numOfchour);
console.log(seattleShop.amofcookpufhr);



// seattleShop.randomCustomer();

// console.log(seattleShop);



