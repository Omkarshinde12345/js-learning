async function data(){
    return "Hello - This is data"
}
const result = data();
result.then(function(success){
    console.log(success);
});



async function getData(){
    return new Promise(function(resolve, reject ){
        setTimeout(() => {
            console.log('Fetch Data.....');
            resolve('Resolved - Fetch Data Promise');
            //reject("Rejected - Error while fetching data....");
        }, 4000);
    });
}

async function main(){  
    try {
        const result = await getData();
        console.log(result);  
    } catch (error) {
        console.log(error);
    }
    // result.then(function(success){
    //     console.log(success);
    // }).catch(function(reject){
    //     console.log(reject);
    // });
}
main();