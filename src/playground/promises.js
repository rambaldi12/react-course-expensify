const promise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        //resolve({
          //  name:'sdf',
            //age:44
        //});

        reject('Something went wrong');
    }, 1500);
});

console.log('before');

promise.then((data) => {
    console.log('ok', data);
}).catch((error) => {
    console.log('error', error);
});

console.log('after');