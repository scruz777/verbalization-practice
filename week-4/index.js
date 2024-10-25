var movies = [
    {
        title: 'Rear Window',
        director: 'Alfred Hitchcock',
        year: 1954,
        cast: ['Jimmy Stewart', 'Grace Kelly', 'Thelma Ritter'],
        relatedMovies: [
            {
                title: 'Psycho',
                director: 'Alfred Hitchcock',
                year: "1960"
            },
            {
                title: 'Body Double',
                director: 'Brian De Palma',
                year: "1984"
            }
        ]
    },
    {
        title: 'Cape Fear',
        director: 'Martin Scorsese',
        year: 1991,
        cast: ['Robert De Niro', 'Nick Nolte', 'Jessica Lange'],
        relatedMovies: [
            {
                title: 'Night of the Hunter',
                director: 'Charles Laughton',
                year: "1955"
            },
            {
                title: 'Misery',
                director: 'Rob Reiner',
                year: "1990"
            }
        ]
    },
    {
        title: 'Fright Night',
        director: 'Tom Holland',
        year: '1985',
        cast: ['William Ragsdale', 'Amanda Bearse', 'Chris Sarandon'],
        relatedMovies: [
            {
                title: 'Lost Boys',
                director: 'Joel Schulmacher',
                year: "1987"
            },
            {
                title: 'Near Dark',
                director: 'Kathryn Bigelow',
                year: '1987'
            }
        ]
    },
    {
        title: 'Blue Velvet',
        director: 'David Lynch',
        year: '1986',
        cast: ['Kyle MacLachlan', 'Laura Dern', 'Dennis Hopper'],
        relatedMovies: [
            {
                title: 'Parents',
                director: 'Bob Balaban',
                year: "1989"
            }
        ]
    }
];
// Problem #1 //
function getRelatedTitles(array){
    return array.reduce((a, c) => a.concat(c.relatedMovies.map(movie => movie.title)), []);
}



// Problem #2 //
// function(){

// }

console.log(getRecommendedTitles(movies));