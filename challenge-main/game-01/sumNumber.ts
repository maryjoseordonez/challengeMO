export class Item {
    sellIn: number;

    constructor(sellIn) {
        this.sellIn = sellIn;
    }
}

export class sumNumber{
    items: Array<Item>; 
    let M;
    let N;

    constructor(items = [] as Array<Item>) {
        this.items = items;
    }

    sumNumbers() {
        M = 0;
        for (let i = 0; i < this.items.length; i++) {
            for (let j = 1; j < this.items.length; j++) {
                M = this.items[i].sellIn + this.items[j].sellIn;    
            
                if (M==N) {
                    const points = new Array(this.items[i].sellIn, this.items[i+1].sellIn);		
                } else {
                    M = 0;
                }
                
            }  
                  
        }
	
        return points;
    }
}
