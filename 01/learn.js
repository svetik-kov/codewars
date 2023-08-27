
number=['123','234','345']

const arrSplit=(number)=>{
    return number.map((el)=> el.split('').map(el=>Number(el)) )
}
console.log(arrSplit(number)) //[[1,2,3],[2,3,4],[3,4,5]]
////////////////////////////////////////////////////////

const string=[
    'font-size',
    'border-radius'
]
const comelize=(arr)=>{
    return arr.map(el=>
        el.split('-').map((el,idx)=>idx===0?el.toLowerCase():
            el[0].toUpperCase()+el.slice(1)).join('')
    )
}
console.log(comelize(string)) //['fontSize',borderRadius]
///////////////////////////////////////////////

const number1=[6,7,4,5,3,7]
const fillArr=(arr)=>{
    return arr.fill('*',2)
}
console.log(fillArr(number1))  //[6,7,'*','*','*','*']


//////////////////////////////////////////

const array1=[1,2,2,3]
const array2=[2]
const arrayDiff=(arr1,arr2)=>{
    return arr1.filter(el=>!arr2.includes(el))
}
console.log(arrayDiff(array1,array2)) //[1,3]

////////////////////////////////////////////
const users=[
    {name:'Ann',age:21},{name:'Artem',age:28},
    {name:'Anne',age:41}
]

const arrayReduce=(arr)=>{
    return arr.reduce((acc,item)=>{
        acc.push(item.name)
        return acc
    },[])
}
console.log(arrayReduce(users)) //['Ann','Artem','Anne']
////////
const sheep=[
    true,true,false,true,false,true
]

const sheepCounter=(arr)=>{
    return arr.reduce((acc,el)=> el ? acc+1 :acc ,0)
}

console.log(sheepCounter(sheep)) //4



var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    if(iterable.length==0){
        return [];
    }
    if(typeof iterable=='string'){
        iterable = iterable.split("");
    }

    var result = [];;
    for(var i = 0;i<iterable.length;i++){
        if(i == 0){
            result.push(iterable[0])
        }else if(iterable[i] != iterable[i-1]){
            result.push(iterable[i])
        }
    }
    return result;
}