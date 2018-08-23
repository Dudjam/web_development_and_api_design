
/*
    Just execute the callback after short amount of time
 */
const executeCallBack = function(callback){

    setTimeout(callback, 1);
};


const blockingSleep = function (ms) {

    ms += new Date().getTime();

    while (new Date().getTime() < ms){}
};


const example = function(){

    console.log("A");

    executeCallBack(() => {

        console.log("B");

        executeCallBack(() => {
            console.log("C");
        });

        blockingSleep(100);

        console.log("D");
    });

    blockingSleep(100);

    console.log("F");
};


example();

/*
A
F
B
D
C

TODO explanation
 */