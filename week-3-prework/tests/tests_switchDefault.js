describe( 'switch default', function() {
    it( 'switch', function() {
      assert.equal( true, checkDay( 'saturday' ) );
    });
    it( 'other switch', function() {
      assert.equal( true, checkDay( 'sunday' ) );
    });
    it( 'default', function() {
      assert.equal( false, checkDay( 'wednesday' ) );
    });
});
