import promiseFunc from 'app/promise';

let main = (() => {
    let _run = (number) => {
        promiseFunc.wait(number).then((success) => {
            console.log(success);
            _run(number + 1);
        })
        .catch((error) => {
            console.log(error);
        });
    };
    return {
        run: _run
    };
})();

//success
main.run(1);