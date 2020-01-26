import * as R from "ramda";

/**
 *
 * @author: Nicolas Cloutier <nicknailers69@gmail.com>
 * @license none
 *
 *
 * @description
 * small utility I made to help me with Ramda in my projects. Ramda is a big and powerful library and its easy to overlook or forget something.
 * Credits go to http://zetcode.com/javascript/ramda/ for the excellent Ramda tutorial that inspired me to build this tool.
 *
 */

//Ramda math functions

const rAdd = (num1:number, num2:number) => {

    return R.add(num1, num2);

};

const rSub = (num1:number, num2: number) => {
    return R.subtract(num1, num2);
};

const rMinMax = (nums:number[]) => {

    let min = R.apply(Math.min, nums);
    let max = R.apply(Math.max, nums);
    return {
        min, max
    }


};

const addToAll = (num) => {

    return R.map(R.add(num));

};

//Ramda array functions can be used with string or array

const getFirstValue = (arr:any) => {

    return R.head(arr);

};

const getAllButFirst = (arr: any) => {

    return R.tail(arr);

};

const getAllButLast = (arr:any) => {
    return R.init(arr);
};

const getLastValue = (arr:any) =>  {
    return R.last(arr);
};

const rCountList = (arr:any) => {
    return R.length(arr);
};

const rCountUnique = (arr: any) => {

    return R.length(R.uniq(arr));

};

// Object Functions

const getPropIfExist = (prop:any, obj:Object) => {

    return R.prop(prop, obj);

};


// List Functions

const makeNewListWithProp = (prop:any, arr:any) => {

    return R.pluck(prop, arr);

};

const splitInChunks = (chunkSize:number, arr:any) => {

    return R.splitEvery(chunkSize, arr);

};

const verifyIfInList = (toCheck:string, arr:any):boolean => {

    return R.contains(toCheck, arr);

};

const RangeMinusLast = (min, max:number) => {

    return R.range(min, max);

};

const RangeAll = (min, max:number) => {

    let maxRange = max + 1;
    return R.range(min, maxRange);

};

const RangeMinusFirst = (min, max:number) =>  {

    let minRange = min + 1;
    let maxRange = max + 1;
    return R.range(minRange, maxRange);

};

const RangeMinusXFromLast = (min, max, minusX:number) => {
    let minRange = min;
    let maxRange = max - minusX;
    return R.range(minRange, maxRange);
};

const RangeMinusXFromFirst = (min, max, minusX:number) => {

    let minRange = min + minusX;
    let maxRange = max + 1;
    return R.range(minRange, maxRange);

};

// Math operations on lists

const SumAll = (arr:number[]) => {

    return R.sum(arr);

};

const MulAll = (arr:number[]) => {
    return R.product(arr);
};

// sorting

const Reverse = (toReverse:any) => {

    return R.reverse(toReverse);

};

const SortAsc = (toSort:any) => {

    // @ts-ignore
    return R.sort((x, y) => x - y, toSort);

};

const SortDesc = (toSort:any) => {

    // @ts-ignore
    return R.sort((x, y) => y - x, toSort);

};

const SortBy = (toSort:any, toSortBy:string, order:string=null) => {

    if(order === null) {

        return R.sortBy(getPropIfExist(toSortBy, toSort));

    }
    if(order.toLowerCase() === "asc") {
        let sortedList = R.sortBy(getPropIfExist(toSortBy, toSort));
        return SortAsc(sortedList);
    }
    if(order.toLowerCase() === "desc") {
        let sortedList = R.sortBy(getPropIfExist(toSortBy, toSort));
        return SortDesc(sortedList);
    }


};

const FindFirst = (arr:any, toFind:any) => {

    return R.find(toFind, arr);

};

const FindLast = (arr:any, toFind:any) => {

    return R.findLast(toFind, arr);

};

const FindInObject = (obj:any, propName:string, toFind:any) => {

    return R.find(R.propEq(propName, toFind))(obj);

};

// maps

const ApplyFunctionToMembers = (func, arr) => {
    return R.map(func, arr);
};

const ApplyFilterToMembers = (func, list) => {

    return R.filter(func, list);

};

const FilterOutItemFromList = (prop, toRemove, list) => {
    return R.reject(R.propEq(prop, toRemove))(list);
};

const GetAllPredicatesIncludingNegs = (func, list) => {

    let [neg, post] = R.partition(func, list);

};

const GroupByAttributesValue = (groupByFunc, groupByList) => {

    return R.groupBy(groupByFunc(groupByList));

};

