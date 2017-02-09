/*function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
};*/

class Library {
  constructor(name, creator) {
    this.name = name;
    this.creator = creator;
    this.playlists = [];
  }
}

class Playlist {
  constructor(name) {
    this.name = name;
    this.tracks = [];
  }
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
}

Playlist.prototype.overallRating = function() {
  let totalRating = 0;
  this.tracks.forEach( (track) => {
    totalRating += track.rating;
  });
  return totalRating/(this.tracks.length);
}

Playlist.prototype.totalDuration = function() {
  let totalDuration = 0;
  this.tracks.forEach( (track) => {
    totalDuration += track.length;
  });
  return totalDuration;
}

class Song {
  constructor(title, rating, length) {
    this.title=title;
    this.rating=rating;
    this.length=length;
  }
}

let ms = new Library('Roger Playlist', 'Roger');
let pl = new Playlist('John Mayer');
let a = new Song('a', 10, 10);
let b = new Song('b', 4, 30);
let c = new Song('c', 6, 30);


//console.log(a);

pl.addTrack(a);
pl.addTrack(b);
pl.addTrack(c);

console.log(pl.overallRating());
console.log(pl.totalDuration());
