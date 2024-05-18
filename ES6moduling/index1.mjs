import { serialize } from "v8";
import * as searching from "./searching.mjs";
import binarysearch from "./searching.mjs"; // default export 
import * as sorting from "./sorting.mjs";

let arr=[13,12,67,45,56,89];
let n=arr.length;
if(sorting.sortedornot(arr,n)){
     sorting.quickSort(arr);
     let output = binarysearch(arr);
     console.log(output);

}
else{
    const output=searching.linearsearch(arr,56);
    console.log(output);
}
