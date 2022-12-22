function solve(matrix) {
   
    let isMagical = true;

    for(let i = 0; i < matrix.length - 1; i++){

       let sumRow1 = matrix[i].reduce((a, b) => a + b, 0);
       let sumRow2 = matrix[i + 1].reduce((a, b) => a + b, 0);

        let sumCol1 = 0;
        let sumCol2 = 0;

        for(let j = 0; j < matrix.length; j++){
           
            sumCol1 += matrix[i][j];
            sumCol2 += matrix[i + 1][j];
        }
        if(sumRow1 !== sumRow2 ||
            sumCol1 !== sumCol2){
                isMagical = false;
            }
    }
   console.log(isMagical);
}


solve([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
]);

console.log('-----');

solve([
    [11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]);



