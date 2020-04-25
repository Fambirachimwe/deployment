import firebase from 'firebase/app';
import 'firebase/firestore';



const firestore = firebase.firestore();


firestore.collection('users').doc('9AS5IuQtf627Wg18cYfp').collection('cartItmes').doc('jLbqTxUfm9uUHQCpfErT');

// we can also query the database using the slash notation

firestore.doc('/users/9AS5IuQtf627Wg18cYfp/cartItems/jLbqTxUfm9uUHQCpfErT')