
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
    let fibonacciGenerator = (n) => {
        let result = [];

        if(n == 1){
            result[0] = 0;
        }else if(n == 2){
            result[0] = 0;
            result[1] = 1;
        }else if(n >2){
            result[0] = 0;
            result[1] = 1;
            for (let i = 2; i <  n; i++){
                result[i] = result[i-1] + result[i-2]
            }
        }
        return result;
    };
    console.log(fibonacciGenerator(20));

    
    