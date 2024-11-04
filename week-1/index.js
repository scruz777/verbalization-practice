var movies = [
    {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        year: 1954
    },.tit
    {
        title: 'Cape Fear',
        director: 'Martin Scorsese',
        year: 1991
    },
    {
        title: 'Fright Night',
        director: 'Tom Holland',
        year: '1985'
    },
    {
        title: 'Blue Velvet',
        director: 'David Lynch',
        year: '1986'
    }
]

function createWeirdTitle(array){
var x1 = array[0].title.split(" ")[1];//"Window" from "Rear Window";
var x2 = array[1].title.split(" ")[0];//"Cape" from "Cape Fear";
var x3 = array[2].title.split(" ")[0];//"Fright" from "Fright Night";
var x4 = array[3].title.split(" ")[1];//"Velvet" from "Blue Velvet";
    return x1 + x2 + x3 + x4

console.log(createWeirdTitle);
