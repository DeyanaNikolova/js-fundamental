function commonEl(arr1, arr2) {
    let firstArr = arr1;
    let secondArr = arr2;
    let firstArrLength = arr1.length;
    let secondArrLength = arr2.length;
   
    for(let i = 0; i < firstArrLength; i++){
        let firstArrEl = firstArr[i];
        for(let j = 0; j < secondArrLength; j++){
            let secondArrEl = secondArr[j];
            if(firstArrEl === secondArrEl){
                console.log(firstArrEl);
            }
        }
    }
    
     // Solution 2:
//     let matches = [];

//     while (arr1.length > 0) {
//         let elementToCompare = arr1.shift();
      
//     for (let i = 0; i < arr2.length; i++) {
//         let element = arr2[i];

//         if(elementToCompare === element){
//             matches.push(element);
//         } else{
//             continue;
//         }
//     }
// }
//     console.log(matches.join('\n'));

}
commonEl(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']);
commonEl(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']);
