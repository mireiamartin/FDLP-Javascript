let array1 = []
let array2 = []  

let result = document.getElementById('result')

function CreaArray(){
    for (let i = 200; i > 0; i -= 20) {
        array1.push(i)
        
        if (i % 3 === 0) {
            array2.push(i)
        }
    result.innerHTML = 'Array 1:' + array1 + '<br>' + 'Array 2:' + array2.reverse()
    }
}
