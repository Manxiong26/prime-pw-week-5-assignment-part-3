console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublish){// added title, artist and yearPublish in the input parameter.
  let album = {// created my object
    title: title,
    artist: artist,
    yearPublish: yearPublish
  }
  collection.push(album);// used .push to add sonf title, artist and yearPublish in the collection array
  return album;
}
console.log(addToCollection('Blinding Lights', 'The Weekend', ' 2020'));// adding
console.log(addToCollection('Save your Tears', 'The Weekend', ' 2020'));// adding
console.log(addToCollection('Rare', 'Selena Gomez', ' 2020'));//adding
console.log(addToCollection('Vulnerable', 'Selena Gomez', ' 2020'));//adding
console.log(addToCollection('Ice Cream', 'BlackPink', ' 2020'));//adding
console.log(addToCollection('Girl Like Me', 'Black Eyed Peas', ' 2020'));//adding
console.log(addToCollection('Get to you', 'Michael Ray', ' 2018'));//adding
console.log(collection);//testing to see if the added items are in the array.

function showCollection(collection){
  console.log(collection.length);// used .length to show the length of the array
  for(let i = 0; i < collection.length; i++){
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublish}.`);//used template literal to combine the answer with the word by and produced, instead of having to use + sign to combine them together.
  }
}
showCollection(collection);

function findByArtist(artistString){
  let singer = [];
  for(let i = 0; i < collection.length; i++){
    if (artistString === collection[i].artist) {
      singer.push(artistString);
    }
  }
  return singer;
}
findByArtist();
console.log('find Selena Gomez', findByArtist('Selena Gomez'));// testing to see if Selena Gomez is in the array
console.log('find The Weekend', findByArtist('The Weekend'));// testing to see if it can find another artist in the array
console.log('find Enrique Iglesias which should come out empty', findByArtist('Enrique Iglesias'));// testing to see if Enrique Iglesias is in the array
console.log('find Blake Shelton which should come out empty', findByArtist('Blake Shelton'));//testing to see if it will still show empty on a different artist who isn't in the array.
