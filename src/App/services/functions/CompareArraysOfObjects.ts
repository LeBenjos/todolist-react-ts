export const compareArraysOfObjects = (arr1: any[], arr2: any[]) => {
    if (arr1.length !== arr2.length) return false;

    for (let i = 0; i < arr1.length; i++) {
        const obj1String = JSON.stringify(arr1[i]);
        const obj2String = JSON.stringify(arr2[i]);

        if (obj1String !== obj2String) return false;
    }

    return true;
}
