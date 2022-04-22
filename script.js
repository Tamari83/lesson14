// 1

let myArray =[5, 25, 89, 120, 36];
myArray.push('javascript','python');
myArray.unshift('htmi','css');
console.log(myArray);

let result=myArray.length;
console.log(result);

let result1=myArray.pop();
console.log(result1);

let result2=myArray.shift();
console.log(result2);
console.log(myArray);

// 2
let myArray2=['ფორთოხალი','ბანანი','მსხალი'];
myArray2.length;
console.log(myArray2);

myArray2.push('ვაშლი', 'ანანსი');
console.log(myArray2);

myArray2.unshift('საზამთრო');
console.log(myArray2);

let result3=myArray2.length;
console.log(result3);
myArray2.splice(2,0 ,'მანგო');
console.log(myArray2);

myArray2.shift();
console.log(myArray2);
myArray2.pop();
console.log(myArray2);

let result5=myArray2.length;
console.log(result5);

// 3
let array3 = [12, 25, 3, 6, 8, 14, 7, 23];
let result6=array3.map(function (x) {
    return x /3;
})
console.log(result6);

// 4
let array4 = ["hello", 125, "javascript", "html", 43, "css", "scss", "bootstrap", 88, 59, "python"];
let result7=array4.filter(value => typeof value === 'number');
console.log(result7);

// 5
let languages = ['html', 'css', 'javascript', 'python', 'php'];
let result8=languages.filter(x => x.length >3);
console.log(result8);
// 6
let array5= ['academy', 'of', 'digital', 'industries'].reduce(function(accumulator,currentValue){
    return accumulator.concat(currentValue);
},
''
)


console.log(array5); 
// 7
let myArray9 = [12, 'google', 32, null, 'yahoo', 25];


let result9=myArray9.map(function(item){
    if( typeof item === 'number'){
        return item *2;
    }else if(typeof item === 'string'){
        return item.toUpperCase();
    }else{
        myArray9.push();
    }
}
)
console.log(result9);




// 8

let words = ['Madrid', 'Rome', 'Milan', 'Berlin'];
let result10=words.filter(x => x.includes('m') || x.includes('M'));
console.log(result10);
