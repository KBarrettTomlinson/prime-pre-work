describe('Logical Operators', function() {
  it('and', function() {
    var trueValues = andTruthTable.filter(function(boolean) {
      return boolean;
    });
    expect(numberOfTrueElements).to.be.equal(trueValues.length);
  });
  it('or', function() {
    var falseValues = orTruthTable.filter(function(boolean) {
      return !boolean;
    });
    expect(numberOfFalseElements).to.be.equal(falseValues.length);
  });
  it('not', function() {
    expect(opposite(true)).to.be.false;
    expect(opposite(false)).to.be.true;
  });
});
