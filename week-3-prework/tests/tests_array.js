describe( 'array tests', function() {
    it( 'firstPerson', function() {
      assert.equal( 'Albert', firstPerson );
    });
    it( 'howManyPeople', function() {
      assert.equal( 4, howManyPeople );
    });
    it( 'lastPerson', function() {
      assert.equal( 'Antoinette', lastPerson );
    });
    it( 'people', function() {
      assert.equal( 'Prince' , people[ people.length-1 ] );
    });
});
