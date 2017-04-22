describe('loops and conditions', function() {
  it('onlyEvens', function() {
    expect(onlyEvens([1,2,3,4])).to.be.eql([2,4]);
    expect(onlyEvens([])).to.be.eql([]);
    expect(onlyEvens([1,3,5])).to.be.eql([]);
  });
});
