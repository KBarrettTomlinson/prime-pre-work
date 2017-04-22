describe( 'loop tests', function() {
    it( 'for loop test 1', function() {
      assert.equal( 18, shoesOnTheBus( 9 ) );
    });
    it( 'for loop test 2', function() {
      assert.equal( 42, shoesOnTheBus( 21 ) );
    });
    it( 'while loop test 1', function() {
      assert.equal( 42, fillCrate( 42 ) );
    });
    it( 'while loop test 1', function() {
      assert.equal( 36, fillCrate( 36 ) );
    });
});
