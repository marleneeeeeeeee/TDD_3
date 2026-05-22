var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  // TC_1.1:
  it("should update the quality of a normal item", function() {
    const gildedRose = new Shop([ new Item("TC_1", 1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  // TC_1.2:
  it("should update the sellIn of a normal item", function() {
    const gildedRose = new Shop([ new Item("TC_1", 1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
  });
  
  // TC_1.3:
  it("quality is never negative", function() {
    const gildedRose = new Shop([ new Item("TC_1", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });


});
