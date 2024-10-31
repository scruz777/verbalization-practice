describe("#getRelatedTitles", function(){
    it('should return an array', function(){
        assert.equal(Array.isArray(getRelatedTitles(movies)), true);
    });
    it('should return a correct array of related titles', function(){
        assert.deepEqual(getRelatedTitles(movies), [
            'Psycho',
            'Body Double',
            'Night of the Hunter',
            'Misery',
            'Lost Boys',
            'Near Dark',
            'Parents'
        ]);
    });
    it('should use the native reduce method', function(){
        const func = getRelatedTitles.toString();
        assert.equal(func.includes(".reduce("), true);
    });
});

describe('#filterByCastName', function(){
    it('should return an array', function(){
        assert.equal(Array.isArray(filterByCastName(movies, 'j')), true);
    });
    it('should return a correct array of movies', function(){
        assert.deepEqual(filterByCastName(movies, 'j'), [
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
            }
        ]);
    });
    it('should use the native filter method', function(){
        let func = filterByCastName.toString();
        assert.equal(func.includes('.filter('), true);
    })
});

describe('#mapRelatedMovies', function(){
    it('should return an array', function(){
        assert.equal(Array.isArray(mapRelatedMovies(movies)), true);
    });
    it('should return a correct array of subarrays', function(){
        assert.deepEqual(mapRelatedMovies(movies), [
            [ 'Psycho', 'Body Double' ],
            [ 'Night of the Hunter', 'Misery' ],
            [ 'Lost Boys', 'Near Dark' ],
            [ 'Parents' ]
        ]);
    });
    it('should use the native map method', function(){
        let func = mapRelatedMovies.toString();
        assert.equal(func.includes('.map('), true);
    });
});