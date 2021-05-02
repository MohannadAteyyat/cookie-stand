'use strict';
let seattleShop = {
    minhc: 23,
    maxhc: 65,
    aveCpc: 6.3,
    numOfchour: 0,
    amofcookpufhr: 0,
    resultsArray: [],
  randomCustomer: function () {
        this.numOfchour = randomCust(23, 65) ;
        console.log(seattleShop.numOfchour + ' ' + 'Customer');   
    },
    amofcookpufhrfunction: function () {
        seattleShop.amofcookpufhr = seattleShop.numOfchour* seattleShop.aveCpc;
        console.log(seattleShop.amofcookpufhr + ' ' +'amounts of cookies purchased for each hour');  
    }
    // seattleShop.resultsArray=

}
function randomCust(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
    //The maximum is exclusive and the minimum is inclusive 
}
seattleShop.randomCustomer();
seattleShop.amofcookpufhrfunction();




// amofcookpufhrfunction: function () {

//     this.amofcookpufhr = gggggggg((randomCust(23, 65)) ,seattleShop.numOfchour) 
//     console.log(seattleShop.amofcookpufhr);


// },




// function amofcookpufhrfunction() {

//     let amofcookpufhr = seattleShop.numOfchour * 6.3
//     return amofcookpufhr


// }


// console.log(seattleShop.amofcookpufhr)

// seattleShop.gggggggg();
// seattleShop.amofcookpufhrfunction();
// seattleShop.amofcookpufhrfunction();


// function gggggggg() {
//     let a = this.numOfchour * this.aveCpc
// return a;}

// }









//  numOfchour = seattleShop.randomCustomer();
//  seattleShop.amofcookpufhr = amofcookpufhrfunction();
//  console.log(seattleShop.numOfchour);




// seattleShop.randomCustomer();

// console.log(seattleShop);



