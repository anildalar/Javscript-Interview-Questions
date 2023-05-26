/*
    1.Swap key with value in object
    Input
        { A : 1, B : 2, C : 3, D : 4 }
    Output
        {1 : A, 2 : B, 3 : C, 4 : D}
*/

let inputObj = { 
            A : 1,
            B : 2,
            C : 3,
            D : 4 
        }

let outputObj = {};

//

for (const key in inputObj) {
    console.log('key ->',key);
    //How to access the value of a js object
    //1.1 objectName.propertyName
    //1.2 objectName["propertyName"]
    //1.3 objectName[expression]
    console.log('value ->',inputObj[key]);
    outputObj[inputObj[key]] = key;
}

console.log(outputObj);

