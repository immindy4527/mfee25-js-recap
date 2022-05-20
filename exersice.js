
    // let handleAge = (age) => {
    //     if (age > 18) {
    //         return "成人";
    //     }else if (age < 18 && age >12 ){
    //         return "青少年";
    //     }else {
    //         return "兒童";
    //     }
    // }
    // let result = handleAge(18);
    // console.log(result);

    // ((color) => {
    //     switch (color) {
    //         case "red" :
    //             console.log("紅色");
    //             break;
    //         case "blue" :
    //             console.log("藍色");
    //             break;
    //         default: 
    //         console.log("其他顏色");
    //     }
    // }) ("pink")

    // n =整段總共有幾個數字
    let fibonacciGenerator = (length) => {
        let result = [];

        if(length == 1){
            result[0] = 0;
        }else if(length == 2){
            result[0] = 0;
            result[1] = 1;
        }else if(length >2){
            result[0] = 0;
            result[1] = 1;
            for (let index = 2; index <  length; index ++){
                result[index] = result[index-1] + result[index-2]
            }
        }
        return result;
    };
    console.log(fibonacciGenerator(20));
    // [
    //     0,   1,    1,    2,    3,
    //     5,   8,   13,   21,   34,
    //    55,  89,  144,  233,  377,
    //   610, 987, 1597, 2584, 4181
    // ]

    
    