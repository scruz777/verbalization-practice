describe("#findCastMembersByLetter", function(){
    it('should return an array', function(){
        assert.equal(Array.isArray(findCastMembersByLetter(movies, 'J')), true)
    });
    it('should return a correct array of castmembers based on the input letter', function(){
        assert.deepEqual(findCastMembersByLetter(movies, "J"), ['Jimmy Stewart', 'Jessica Lange']);
    });
    it('should be case insensitive', function(){
        assert.deepEqual(findCastMembersByLetter(movies, 'j'), ['Jimmy Stewart', 'Jessica Lange']);
    });
});