/*
* Object Representation
{ title: "place", description: "", image: "", coordinates: {longitude: 123.24, latitude: 135.00005}  }
*/
/*class Place{

  _construct(title, description, coordinates, image, rating ){
    this.title = title;
    this.coordinates = coordinates;
    this.description = description;
    //this.image = image;
    //this.rating = rating;
  }
  toString(){
    return {title, description, coordinates};
  }



}
module.exports = Place;

*/
let Place = function(title, description, coordinates){
  this.title = title || null;
  this.coordinates = coordinates || null;
  this.description = description || null;
  this.print = () => {
    return {title : this.title, description : this.description, coordinates: this.coordinates.longitude}
  }
}

module.exports = Place;