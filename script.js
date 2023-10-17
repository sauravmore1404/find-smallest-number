const findSmallestNum=(array)=>{
    let small= array[0];
    for(let i=0;i<array.length;i++){
        if(small>array[i]){
            small=array[i]
        }
    } return (document.getElementById("demo").innerHTML=small)
}