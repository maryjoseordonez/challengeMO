export class Item {
  name: string;
  sellIn: number;
  quality: number;

  constructor(name, sellIn, quality) {
      this.name = name;
      this.sellIn = sellIn;
      this.quality = quality;
  }
}

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() :Item[]  {
        this.items.forEach(currentItem => {
            
            switch (currentItem.name) {
                case 'Aged Brie': {
                    if (currentItem.quality > 0) {
                        if (currentItem.name != 'Sulfuras, Hand of Ragnaros') 
                            currentItem.quality = currentItem.quality - 1;                        
                    }
                    break;
                }
                case 'Backstage passes to a TAFKAL80ETC concert': {
                    if ((currentItem.sellIn < 11) || (currentItem.sellIn < 6)) {
                        if (currentItem.quality < 50) 
                            currentItem.quality = currentItem.quality + 1;
                    }                    
                    break;
                }
                case  'Sulfuras, Hand of Ragnaros':  {
                    currentItem.quality = 80;
                    break;
                }
                case 'Conjured':  {
                    if (currentItem.sellIn === 5) currentItem.quality -= 3;
                    else {
                        currentItem.quality = currentItem.quality - 1;
                        if (currentItem.sellIn <= 0) 
                            currentItem.quality = currentItem.quality - 2;                        
                    }
                    currentItem.sellIn -= 1
                    break;
                }
                default: {
                    currentItem.quality = currentItem.quality - 1;
                    if (currentItem.sellIn <= 0) 
                        currentItem.quality = currentItem.quality - 1;                    
                    currentItem.sellIn -= 1
                }
            }
        })
        return this.items;
    }
}