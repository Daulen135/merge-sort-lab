
function findMinAndRemoveSorted (arr){
    let min = arr[0];
    let index;
    let sorted = [];
    for(let i; i<arr.length;i++){
        if(arr[i]<arr[0]){
            min = arr[i]
            index = i;
            
        }
    }
    arr.splice(index,1);
    return min;
}

function merge(arr1,arr2){
    let newArr = arr1.concat(arr2);
    console.log(newArr)
    
    newArr.sort(function(a, b){return a-b});

    return newArr

}
console.log(merge([7,2,3],[14,2,6]))

function mergeSort(array){
    let midpoint = array.length/2
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint, array.length)
    return merge(firstHalf, secondHalf)
  }
  