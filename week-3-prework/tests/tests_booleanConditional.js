describe( 'boolean conditional', function() {
    it( 'egg carton full', function() {
      assert.equal( true, isCartonFull( 12, 12 ) );
    });
    it( 'egg carton not full', function() {
      assert.equal( false, isCartonFull( 9, 12 ) );
    });
});
