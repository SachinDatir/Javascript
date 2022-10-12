// object literal 

let obj = {
    firstName: 'sachin',
    lastName: 'Datir',
    age: 23,
    rollNo: 10,
    display: function () {
        console.log(this.firstName + " " + this.age)
    }
}

let obj1 = {
    firstName: 'pranamya',
    lastName: 'Pangare',
    age: 23,
    rollNo: 36,
    display: function () {
        console.log(this.firstName + " " + this.age)
    }
}
console.log(obj1)
obj1.display()
// in object literal ==> repitation of code ,,memory bloat

// function custructor

function Music(song, singer, composer) {
    this.song = song
    this.singer = singer
    this.composer = composer
    this.display = function () {
        console.log(this.song + " " + this.singer)
    }
}
Music.prototype.Movie = 'Jelebi'


let obj2 = new Music('Pal', 'Shreya , arijit', 'javed mohsin')
console.log(obj2)
obj2.display()
console.log(obj2.Movie)
obj2.Movie = 'SitaRamam'
console.log(obj2.Movie)
console.log(obj2.__proto__ == Music.prototype)

// Es6 class 

class Movie {
    constructor(name, actor, actress, director) {
        this.Mname = name
        this.Actor = actor
        this.Actress = actress
        this.Director = director
    }
}
Movie.prototype.display=function(){
    console.log(this.Mname+" "+this.Director)
}

let movie = new Movie('RRR','Ram & jr.NTR','AliaBhatt','SS Rajamauli')
movie.display()
console.log(movie)





// cd Oops
// node js.js