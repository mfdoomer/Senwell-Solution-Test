data = ['Z',30,'N',10,'M',20]

function sort(data) {
    const alphabet = []
    const numeric = []
    for (let index = 0; index < data.length; index++) {
        if(typeof data[index] === 'number'){
            numeric.push(data[index])
        } else {
            alphabet.push(data[index])
        }
    }

    // to convert numerical value into sorting order
    for (index1 = 0; index1 < numeric.length; index1++) {
        for (index2 = 0; index2 < numeric.length - index2; index2++) {
            if (numeric[index2] > numeric[index2+1]){
                let temp = numeric[index2]
                numeric[index2] = numeric[index2+1]
                numeric[index2+1] = temp
            }
        }
    }

    // to convert alphabetical value into sorting order
     for (index1 = 0; index1 < alphabet.length; index1++) {
        for (index2 = 0; index2 < alphabet.length - index2; index2++) {
            if (alphabet[index2] > alphabet[index2+1]){
                let temp = alphabet[index2]
                alphabet[index2] = alphabet[index2+1]
                alphabet[index2+1] = temp
            }
        }
    }

    console.log('numeric>>>', numeric)
    console.log('alphabet>>>', alphabet)
    
}

console.log(sort(data))