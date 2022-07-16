// 3. Show all the values of an array in a html webpage using DOM and forEach method?

const arr=[4,5,6,77,12,29];

const output= document.getElementById('output');

arr.forEach((elem)=>{
    output.innerText+=elem+' ,';
})