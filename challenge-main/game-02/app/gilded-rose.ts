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

import { 
    updateQualityForAgedBrie, 
    updateQualityForConcert, 
    updateQualityForSulfuras, 
    updateQualityForConjured, 
    updateQualityForNormalItem
} from './updateQuality'

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() :Item[]  {
        this.items.forEach(currentItem => {
            
            switch (currentItem.name) {
                case 'Aged Brie': {
                    currentItem = updateQualityForAgedBrie(currentItem)
                    break;
                }
                case 'Backstage passes to a TAFKAL80ETC concert': {
                        currentItem = updateQualityForConcert(currentItem)
                        break;
                }
                case  'Sulfuras, Hand of Ragnaros':  {
                        currentItem = updateQualityForSulfuras(currentItem)
                        break;
                }
                case 'Conjured':  {
                        currentItem = updateQualityForConjured(currentItem)
                        break;
                }
                default: {
                        currentItem = updateQualityForNormalItem(currentItem)
                }
            }
        })
        return this.items;
    }
}