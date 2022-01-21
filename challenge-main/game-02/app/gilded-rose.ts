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

const MAX_QUALITY = 50
const MIN_QUALITY = 0

const isLessThanMaximum = quality => quality < MAX_QUALITY
const isOverMinimum = quality => quality > MIN_QUALITY

const increaseQuality = quality => isLessThanMaximum(quality) ? quality + 1 : quality
const decreaseQuality = quality => isOverMinimum(quality) ? quality - 1 :  quality 
const decreaseQualityConjured = quality => isOverMinimum(quality) ? quality - 2 :  quality

export class GildedRose {
    items: Array<Item>;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    updateQuality() :Item[]  {
        this.items.forEach(currentItem => {
            
            switch (currentItem.name) {
                case 'Aged Brie': {
                    currentItem.quality = increaseQuality(currentItem.quality)
                    currentItem.quality = currentItem.sellIn < 0 ? increaseQuality(currentItem.quality) : currentItem.quality
                    currentItem.sellIn -= 1;
                    break;
                }
                case 'Backstage passes to a TAFKAL80ETC concert': {
                    let quality = increaseQuality(currentItem.quality);
                    if (currentItem.sellIn === 0) {                        
                        quality = currentItem.sellIn < 11 ? increaseQuality(quality) : quality;
                        quality = currentItem.sellIn < 6 ? increaseQuality(quality) : quality; 
                    }         
                    currentItem.quality = quality;                               
                    currentItem.sellIn -= 1
                    break;
                }
                case  'Sulfuras, Hand of Ragnaros':  {
                    currentItem.quality = 80;
                    break;
                }
                case 'Conjured':  {
                    if (currentItem.sellIn === 5) {
                        currentItem.quality -= 3
                    } else {
                        currentItem.quality = decreaseQualityConjured(currentItem.quality);
                        currentItem.quality = currentItem.sellIn <= 0 ? decreaseQualityConjured(currentItem.quality) : currentItem.quality
                    }
                    currentItem.sellIn -= 1
                    break;
                }
                default: {
                    currentItem.quality = decreaseQuality(currentItem.quality);
                    currentItem.quality = currentItem.sellIn <= 0 ? decreaseQuality(currentItem.quality) : currentItem.quality
                    currentItem.sellIn -= 1
                }
            }
        })
        return this.items;
    }
}