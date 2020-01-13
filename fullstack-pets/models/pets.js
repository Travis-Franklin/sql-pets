const db = require('./connection');

function create(){

}

async function one (id){
    const onePet = await db.query(`select * from ${id}`)
    .then( data => {
        console.log(data);
        return data;
    })
    .catch(err => {
        console.log(err);
        return [];
    })
    console.log(onePet);
}

// one(2);


// async function all (){
//     const allPets = await db.query(`select * from pets`)
//         .then( data => {
//             console.log(data);
//             return data;
//         })
//         .catch(err => {
//             console.log(err);
//             return [];
//         })
//     console.log(allPets);
// }


function update(){

}

function del(){

}

module.exports = {
    create,
    one,
    all, 
    update,
    del
};