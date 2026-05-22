var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
  // TC_1.1:
  it("should update the quality of a normal item", function() {
    const gildedRose = new Shop([ new Item("Item_1", 1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  // TC_1.2:
  it("should update the sellIn of a normal item", function() {
    const gildedRose = new Shop([ new Item("Item_1", 1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
  });


  // TC_2.1:
  it("should decrease the quality twice as fast when sellIn is less than 0", function() {
    const gildedRose = new Shop([ new Item("Item_1", -1, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });

    
  // TC_3.1:
  it("quality is never negative", function() {
    const gildedRose = new Shop([ new Item("Item_1", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

    
  // TC_3.2:
  it("quality is never negative, when sellIn is less than 0", function() {
    const gildedRose = new Shop([ new Item("Item_1", -1, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  // TC_4.1:
  it("Aged Brie increases in quality", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 3, 1) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2);
  });

  // TC_5.1:
    it("Quality of an item never exceeds 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 3, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  // TC_6.1:
    it("Sulfuras does not change in quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 3, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

    // TC_6.2:
    it("Sulfuras does not change in sellIn", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 3, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(3);
    });

    // TC_7.1:
    it("Backstage passes increase in quality by 2 when sellIn <= 10", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
    });

    // TC_7.2:
    it("Backstage passes increase in quality by 3 when sellIn <= 5", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(23);
    });

});
