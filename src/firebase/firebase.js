import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

const onError = (error) => {
    console.log('error:', error);
}

const onSuccess = () => {
    console.log('OK!');
}

firebase.initializeApp(config);
const database = firebase.database();

export { firebase, database as default };

/*database.ref('expenses').on('child_added',(snapshot) => {
    console.log(snapshot.key,snapshot.val());
}, onError);*/
/*
database.ref('expenses').push({
    description:'Expense 4',
    note:'',
    amount: 3500,
    createdAt:11115564
}).then(onSuccess).catch(onError);
*/


//database.ref('notes/-L9atHhomL5wSzRR6HhI').remove();


/*const onValueChange = database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(val);
}, onError);

setTimeout(() => {
    database.ref().update({
        'age':27
    });
},3500)

setTimeout(() => {
    database.ref().off(onValueChange);
},7000)

setTimeout(() => {
    database.ref().update({
        'age':28
    });
},10500)*/

/*database.ref('location/city').once('value')
.then((snapshot) => {
    const val = snapshot.val();
    console.log(val);
}).catch((e)=> {
    console.log('error fetching data',e)
})*/

/*database.ref().set({
    name: "Ilija Stojanovic",
    age: 26,
    stressLevel: 6,
    job:{
        title:'developer',
        company:'Google'
    },
    location: {
        city: "Beograd",
        country: "Srbija"
    }
}).then(() => {
    console.log('saved')
}).catch((error) => {
    console.log('error', error)
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    location: {
        city: 'Seattle',
        country: 'USA'
    }
}).then(()=>{
    console.log('updated')
 }).catch((error) => {
    console.log('error', error)
 });*/

/*  database.ref('isSingle').remove()
 .then(()=>{
    console.log('removed')
 }).catch((error) => {
    console.log('error', error)
 }) */