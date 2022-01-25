function sumNumber(items, N) {
    var posicion = 0;
    var end = items.length;
    var find = 0;
        while ((posicion <= end)){
            var M = 0;
            M = items[posicion] + items[end];  
            if (M == N) {
                var points = new Array(items[posicion], items[end]);		
                return points;
            } else if (posicion < end) posicion++;
                else {
                  end--;
                  posicion=0;
                }
        }
}