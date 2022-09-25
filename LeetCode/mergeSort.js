// merge sort research

function merge(arr, l, m, r)
{
    var n1 = m - l + 1;
    var n2 = r - m;
 
    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);
 
    // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++)
        L[i] = arr[l + i];
    for (var j = 0; j < n2; j++)
        R[j] = arr[m + 1 + j];
 
    // Merge the temp arrays back into arr[l..r]
 
    // Initial index of first subarray
    var i = 0;
 
    // Initial index of second subarray
    var j = 0;
 
    // Initial index of merged subarray
    var k = l;
 
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
 
    // Copy the remaining elements of
    // L[], if there are any
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
 
    // Copy the remaining elements of
    // R[], if there are any
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}


function mergeSort(arr,l, r){
    if(l>=r){
      console.log("Return")
        return;//returns recursively
    }
    var m =l+ parseInt((r-l)/2);
  
    // console.log("Mid:",m)
    console.log("l:",l)
    console.log("r:",r)
    // console.log("arr=>l=>m=",arr,l,m)
    console.log("----------L = R-----------")
    mergeSort(arr,l,m);
    let lR = m+1
    let rR = r
    // console.log("Mid1:",m)
    console.log("lR:",lR)
    console.log("rR:",rR)
    // console.log("arr1=>l1=>m1=",arr,m+1,r)
    console.log("----------lR  = rR-----------")
    mergeSort(arr,lR,rR);
   
    console.log("Called merge")
    merge(arr,l,m,r)
}

let arr = [12,11,13,5,6,7]
var arr_size = arr.length
mergeSort(arr, 0, arr_size - 1)


// Merge sort complete code 
// const _mergeArrays = (a, b) => {
//     const c = []

//     while (a.length && b.length) {
//         c.push(a[0] > b[0] ? b.shift() : a.shift())
//     }

//     //if we still have values, let's add them at the end of `c`
//     while (a.length) {
//         c.push(a.shift())
//     }
//     while (b.length) {
//         c.push(b.shift())
//     }

//     return c
// }

// const mergeSort = (a) => {
    
//     if (a.length < 2) return a

//     const middle = Math.floor(a.length / 2)
    
//     const a_l = a.slice(0, middle)
//     const a_r = a.slice(middle, a.length)
    
//     const sorted_l = mergeSort(a_l)
//     const sorted_r = mergeSort(a_r)
    
//     return _mergeArrays(sorted_l, sorted_r)

// }


// const sortedArr = mergeSort([69, 64, 5, 6, 4, 5, 79, 45, 68, 46, 79, 45, 67, 16, 96, 76])
// console.log(sortedArr)