'use strict';
var tableHeads = ['Flying From' , 'Flying To ' , 'Capacity' , 'Reserved Seats' , 'Available Seats'];
var table = document.getElementById('filghtsTable');
var allFlight = [];
function Flight (flyingFrom , flyingTo , capacity , reservedSeats){
   // this property = value
    this.flyingFrom =flyingFrom;
    this.flyingTo = flyingTo;
    this.capacity = capacity;
    this.reservedSeats = reservedSeats;
    this.availableSeats = 0;
    this.tickets = [];
  
}
Flight.prototype.setAvailableSeats = function ( ) {
    this.availableSeats = this.capacity - this.reservedSeats;
};
Flight.prototype.fillTickets = function (){
    for (var i =1; i< this.capacity; i++){
        this.tickets.push(i);
    }
}

Flight.prototype.addRow = function(){

  var row = document.createElement('tr')
  table.appendChild(row);

  var td = document.createElement('td')
  row.appendChild(td)
  td.textContent=this.flyingFrom

  var td1 = document.createElement('td')
  row.appendChild(td1)
  td1.textContent=this.flyingTo

  var td2 = document.createElement('td')
  row.appendChild(td2)
  td2.textContent=this.capacity

  var td3 = document.createElement('td')
  row.appendChild(td3)
  td3.textContent=this.reservedSeats

  var td4 = document.createElement('td')
  row.appendChild(td4)
  td4.textContent=this.availableSeats


}


var firstFlight = new Flight('Amman' , 'Paris' , 150  , 15);
firstFlight.setAvailableSeats();
firstFlight.fillTickets();
console.log(firstFlight);
function createHeader (){

    // Create the header raw
    // create raw
   var headRow = document.createElement('tr');
   table.appendChild(headRow);
    //create tds
    var firstTd;
    for (var i = 0; i < tableHeads.length ; i++){
        firstTd = document.createElement('td');
        firstTd.textContent= tableHeads[i];
        headRow.appendChild(firstTd);
    }
}
createHeader();

var flightForm = document.getElementById('flightForm');
flightForm.addEventListener('submit',addFlight); // for all the flightForm to get target of any element inside thos filed

function addFlight(event){
  console.log("xxxxxxxxxxx");
  event.preventDefault();

  var form = event.target.flyingFrom.value
  console.log("xxxxxxx" ,form);
  /////////////////////// this flyingFrom is the id for element inside the form (check it)
  //////////////////////

  var to = event.target.flyingTo.value
  console.log("xxxxxxx" ,to);

  var capacity = event.target.capacity.value
  console.log("xxxxxxx" ,capacity);

  var reserved = event.target.reserved.value
  console.log("xxxxxxx" ,reserved);


  var addedFlight = new Flight (form,to,capacity,reserved);
  addedFlight.setAvailableSeats();
  addedFlight.fillTickets();

  allFlight.push(addedFlight);

  addedFlight.addRow();

}


