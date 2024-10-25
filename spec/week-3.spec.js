describe("#filterByRelatedMovieYear", function(){
    it('should return an array', function(){
        assert.equal(Array.isArray(filterByRelatedMovieYear(movies, "80s")), true);
    });
    it('should return a correct array of movies', function(){
        assert.deepEqual(filterByRelatedMovieYear(movies, "90s"), [
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
            }
        ]);
    });
    it('should use the _.filter() method', function(){
        const func = filterByRelatedMovieYear.toString();
        assert.equal(func.includes(".filter("), true);
    })
});