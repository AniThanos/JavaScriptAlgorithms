function bubbleSort(arr){   
    var noSwap = false;
    for(let i=arr.length;i>0;i--){
        noSwap = true;
        for(let j = 0 ; j < i-1;j++){
            if(arr[j]>arr[j+1]){
                //swap with es2015
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                noSwap = false;
            }
        }
        if(noSwap)
            break;
    }
    return arr;
}

console.log(bubbleSort([1,4,5,1,2]))