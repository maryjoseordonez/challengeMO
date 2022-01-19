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

        let posicion = 1;
        let end = this.items.length;
        
        for (let i = 0; i < end; i++) {
            while (posicion <= end) {
                M = this.items[i].sellIn + this.items[posicion].sellIn;

                if (M==N) {
                    const points = new Array(this.items[i].sellIn, this.items[posicion].sellIn);		
                    return points;
                } 
                posicion = posicion + 1;
                M = 0;
            }
        }
    }
}