var movies = [
    {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        year: 1954
    },
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
    var output = "";
    for (var i = 0; i < array.length; i++){
        var word;
        if (array[i].year % 2 === 0){
            word = array[i].title.split(" ")[1];
            output += word;
        } else {
            word = array[i].title.split(" ")[0];
            output += word;
        }
    }
    return output;
}

console.log(createWeirdTitle(movies));