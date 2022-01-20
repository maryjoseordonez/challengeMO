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

        let posicion = 0;
        let end = this.items.length;

        while (posicion < end) {
            M = this.items[posicion].sellIn + this.items[end].sellIn;
            if (M == N) {
                const points = new Array(this.items[posicion].sellIn, this.items[end].sellIn);		
                return points;
            } else if (M < N) posicion++;
                else end--;
        }
    }
}