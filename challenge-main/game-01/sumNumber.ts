export class Item {
    sellIn: number;

    constructor(sellIn) {
        this.sellIn = sellIn;
    }
}

function sumNumber(items:Array<Item>, int N) {
    let posicion = 0;
    let end = items.length;

        while (posicion < end) {
            M = 0;
            M = items[posicion].sellIn + items[end].sellIn;
            if (M == N) {
                const points = new Array(items[posicion].sellIn, items[end].sellIn);		
                return points;
            } else if (M < N) posicion++;
                else end--;
        }
}