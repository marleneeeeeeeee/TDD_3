var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  // TC_1.1:
  it("should update the quality of a normal item", function() {
    const gildedRose = new Shop([ new Item("TC_1", 1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

});
