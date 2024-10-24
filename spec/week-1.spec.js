describe("#createWeirdTitle", function(){
    it('should return a string', function(){
        assert.equal(typeof createWeirdTitle(movies), "string");
    });
    it('should return the correct string', function(){
        assert.equal(createWeirdTitle(movies), "WindowCapeFrightVelvet");
    });
})