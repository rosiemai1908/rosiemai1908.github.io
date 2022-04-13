console.log("Hello bookshelf");


var Airtable = require("airtable");
console.log(Airtable);

var Airtable = require('airtable');
var base = new Airtable({apiKey: 'keyhIiKOMAQWNvsMt'}).base('appKJNOflQu7vQb0r');

let future = []
let people = []
let leader = []
let fullArray = []

base("cycle").select({maxRecords: 88, view:"Grid view"}).eachPage(gotImage, gotAllImages);

function gotImage(records, fetchNextPage) {
    console.log("got image")
    fullArray.push(...records)
    fetchNextPage()
}

function gotAllImages(err) {
    console.log("got all images")
    cycleStart();
}

//Loop around the airtable to the specific category
function cycleStart() {

    for(let i = 0; i < fullArray.length; i++){
       console.log(fullArray[i].fields.category)
 
//Create sections for each category
        var categoryName = fullArray[i].fields.category
        if (categoryName == "future") {
            future.push(fullArray[i])
        } 

        if (categoryName == "people") {
            people.push(fullArray[i])
        }

        if (categoryName == "leader") {
            leader.push(fullArray[i])
        }
    }
    shuffle()
}

//Randomly shuffle the images
function shuffle() {
    let randomFuture = Math.floor(Math.random()*29);
    let randomPeople = Math.floor(Math.random()*36);
    let randomLeader = Math.floor(Math.random()*23);

    console.log(future[randomFuture].fields.Photos[0].url)
    console.log(leader[randomLeader].fields.Photos[0].url)
    console.log(people[randomPeople].fields.Photos[0].url)

    let htmlFuture = document.getElementById("future")
    htmlFuture.src = future[randomFuture].fields.Photos[0].url

    let htmlPeople = document.getElementById("people")
    htmlPeople.src = people[randomPeople].fields.Photos[0].url

    let htmlLeader = document.getElementById("leader")
    htmlLeader.src = leader[randomLeader].fields.Photos[0].url
}



/*
base('cycle').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 88,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage, gotImage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
        console.log('Retrieved', record.get('Name'));
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
    

}, function done(err) {
    if (err) { console.error(err); return; }
});
*/