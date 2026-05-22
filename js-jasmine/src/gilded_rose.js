class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items;
  }
  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      switch(this.items[i].name){
        case "Backstage passes to a TAFKAL80ETC concert":
          updateBackStagePasses(this.items[i]);
          break;
        case "Aged Brie":
          updateAgedBrie(this.items[i]);
          break;
        case "Sulfuras, Hand of Ragnaros":
          this.items[i].quality = 80;
          this.items[i].sellIn += 1;
          break;
        case "Conjured Mana Cake":
          updateManaCake(this.items[i]);
          break;
        default:
          updateNormalItem(this.items[i]);
      }
      this.items[i].sellIn -=1;
    }
    return this.items;
  }
}

function updateNormalItem(item){
  if(item.sellIn < 0){
    item.quality = item.quality - 2;
  }
  else {
    item.quality = item.quality - 1;
  }
  if(item.quality < 0){
    item.quality = 0;
  }
}

function updateBackStagePasses(item){
  if (item.sellIn < 6) {
    item.quality = item.quality + 3;
  }
  else if (item.sellIn < 11) {
    item.quality = item.quality + 2;
  }
  else {
    item.quality = item.quality + 1;
  }
  if (item.sellIn < 0){
    item.quality = 0;
  }
  if(item.quality > 50){
    item.quality = 50;
  }
}

function updateManaCake(item){
  if(item.sellIn < 0){
    item.quality = item.quality - 4;
  }
  else {
    item.quality = item.quality - 2;
  }
  if(item.quality < 0){
    item.quality = 0;
  }
}
function updateAgedBrie(item){
  item.quality += 1;
  if(item.quality > 50){
    item.quality = 50;
  }
}


module.exports = {
  Item,
  Shop
}
