describe('array index considerations', function() {
    it('the red color', function() {
        assert.equal(theColorRed, 'red');
    });
    it('the yellow color', function() {
        assert.equal(theColorYellow, 'yellow');
    });
    it('the forty third color', function() {
        assert.isUndefined(fortyThirdColor);
    });

    it('lastItem', function() {
        var zeroThroughFour = [0, 1, 2, 3, 4];
        assert.equal(lastItem(zeroThroughFour), 4);

        var letters = ['p', 'r', 'i', 'm', 'e'];
        assert.equal(lastItem(letters), 'e');
    });
});