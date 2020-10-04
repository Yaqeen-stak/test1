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
    allFlight.push(this)
  
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


// var firstFlight = new Flight('Amman' , 'Paris' , 150  , 15);
// firstFlight.setAvailableSeats();
// firstFlight.fillTickets();
// console.log(firstFlight);
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
  event.preventDefault();

  var form = event.target.flyingFrom.value
  /////////////////////// this flyingFrom is the id for element inside the form (check it)
  //////////////////////

  var to = event.target.flyingTo.value;
  var capacity = event.target.capacity.value;
  var reserved = event.target.reserved.value;


  var addedFlight = new Flight (form,to,capacity,reserved);
  addedFlight.setAvailableSeats();
  addedFlight.fillTickets();


  addedFlight.addRow();
  calculateOverAllCapacity();

  localStorage.setItem('All flights',JSON.stringify(allFlight));

}


function calculateOverAllCapacity(){
    let ovarAllCapacity = 0;
    console.log(allFlight);
    for (var i = 0 ; i < allFlight.length ; i++){
        ovarAllCapacity+=Number(allFlight[i].capacity)
        console.log(allFlight[i].capacity);
    }

    document.getElementById('ovarAllCapacity').textContent="over all Capacity is "+ ovarAllCapacity;

}






if (localStorage.getItem('All flights')){
    let oldData = JSON.parse(localStorage.getItem('All flights'));


    for (var i = 0 ; i < oldData.length ; i++){
        var A = new Flight (oldData[i].flyingFrom,oldData[i].flyingTo,oldData[i].capacity,oldData[i].reservedSeats)

        A.setAvailableSeats();
        A.fillTickets();
        A.addRow()
    }
}

calculateOverAllCapacity();

