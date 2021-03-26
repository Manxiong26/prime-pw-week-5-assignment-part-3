console.log('***** Music Collection *****')
let collection = [];

function addToCollection(title, artist, yearPublish){
  let album = {
    title: title,
    artist: artist,
    yearPublish: yearPublish
  }
  collection.push(album);
  return album;
}
console.log(addToCollection('Blinding Lights', 'The Weekend', ' 2020'));
console.log(addToCollection('Save your Tears', 'The Weekend', ' 2020'));
console.log(addToCollection('Rare', 'Selena Gomez', ' 2020'));
console.log(addToCollection('Vulnerable', 'Selena Gomez', ' 2020'));
console.log(addToCollection('Ice Cream', 'BlackPink', ' 2020'));
console.log(addToCollection('Girl Like Me', 'Black Eyed Peas', ' 2020'));
console.log(addToCollection('Get to you', 'Michael Ray', ' 2018'));
console.log(collection);

function showCollection(collection){
  console.log(collection.length);// used .length to show the length of the array
  for(let i = 0; i < collection.length; i++){
    console.log(`${collection[i].title} by ${collection[i].artist}, published in ${collection[i].yearPublish}.`);
  }
}
showCollection(collection);

function findByArtist(){
  
}
