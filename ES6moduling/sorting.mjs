function partition(arr, low, high) { 
	let pivot = arr[high]; 
	let i = low - 1; 

	for (let j = low; j <= high - 1; j++) { 
		// If current element is smaller than the pivot 
		if (arr[j] < pivot) { 
			// Increment index of smaller element 
			i++; 
			// Swap elements 
			[arr[i], arr[j]] = [arr[j], arr[i]]; 
		} 
	} 
	// Swap pivot to its correct position 
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]; 
	return i + 1; // Return the partition index 
} 

export function quickSort(arr, low, high) { 
	if (low >= high) return; 
	let pi = partition(arr, low, high); 

	quickSort(arr, low, pi - 1); 
	quickSort(arr, pi + 1, high); 
} 


// Function to merge two sorted parts of array
function merge(arr, left, middle, right) {
    
    // Length of both sorted aub arrays
    let l1 = middle - left + 1;
    let l2 = right - middle;
    // Create new subarrays
    let arr1 = new Array(l1);
    let arr2 = new Array(l2);
    
    // Assign values in subarrays
    for (let i = 0; i < l1; ++i) {
        arr1[i] = arr[left + i];
    }
    for (let i = 0; i < l2; ++i) {
        arr2[i] = arr[middle + 1 + i];
    }

    // To travesrse and modify main array
    let i = 0,
        j = 0,
        k = left;
        
    // Assign the smaller value for sorted output
    while (i < l1 && j < l2) {
        if (arr1[i] < arr2[j]) {
            arr[k] = arr1[i];
            ++i;
        } else {
            arr[k] = arr2[j];
            j++;
        }
        k++;
    }
    // Update the remaining elements
    while (i < l1) {
        arr[k] = arr1[i];
        i++;
        k++;
    }
    while (j < l2) {
        arr[k] = arr2[j];
        j++;
        k++;
    }
}

// Function to implement merger sort in javaScript
 export default function mergeSort(arr, left, right) {
    if (left >= right) {
        return;
    }
    
    // Middle index to create subarray halves
    let middle = left + parseInt((right - left) / 2);
    
    // Apply mergeSort to both the halves
    mergeSort(arr, left, middle);
    mergeSort(arr, middle + 1, right);
    
    // Merge both sorted parts
    merge(arr, left, middle, right);
}

export function  sortedornot(arr,n){
   let i=0;
   let j=i+1;
    while(j<n){
        if(arr[j]<arr[i])
        return false;
    j++;
    i++;
    }
    return true;
}