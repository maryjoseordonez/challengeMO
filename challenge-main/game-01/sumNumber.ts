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

        for (let i = 0; i < this.items.length; i++) {
	    M = this.items[i].sellIn + this.items[i+1].sellIn;  
        
            if (M==N) {
		const points = new Array(this.items[i].sellIn, this.items[i+1].sellIn)		
	    }          
        }
	
        return points;
    }
}
