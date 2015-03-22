let promiseFunc = (() => {
    let _wait = (number) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (number < 10) {
                    resolve('Number ' + number + ' is Success!!!!');
                    }
                else {
                    reject(Error('Number ' + number + ' is Error!!!'));
                }
            }, 1000);
        });
    };
    return{
        wait: _wait
    };
})();

export default promiseFunc;