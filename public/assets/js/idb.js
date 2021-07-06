//creating a variable to hold db connnection
let db;
const request =indexedDB.open("budget",1);

request.onupgradeneeded= async(e)=>{
    db =e.target.result;

    //creating an object store and set  autoincrerment to true
    db.createObjectStore("pending", { autoIncrement: true });

};

request.onsuccess = e =>{
    db = e.target.result;
    //check if app is online before reading from db
    if (navigator.online){
        checkDatabase();
    }
};
reques.onerror = e =>{
  console.log("Woops! " + e.target.errorCode);
};

function saveRecord(record) {
    // to create a transaction on the pending db with readwrite access
    // db = request.result;

        // this will access your pending object store
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");
    
  // this will add record to your store with add method.
    store.add(record);
}

function checkDatabase() {
   
    
     // open a transaction on your pending db
    db = request.result;
    
    // access your pending object store
    const transaction = db.transaction(["pending"], "readwrite");
    const store = transaction.objectStore("pending");

  // get all records from store and set to a variable
    const getAll = store.getAll();
  
    getAll.onsuccess = function () {
      if (getAll.result.length > 0) {
        fetch('/api/transaction/bulk', {
          method: 'POST',
          body: JSON.stringify(getAll.result),
          headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-Type': 'application/json',
          },
        })
          .then((response) => response.json())
          .then(() => {
            // if  it is successful, then open a transaction on your pending db
            const transaction = db.transaction(["pending"], "readwrite");

            //  this will access your pending object store
            const store = transaction.objectStore("pending");

            //this will clear all items in your store
            store.clear();
          });
        }
    };
}
  
  // Adding listener to check network connection of app
  window.addEventListener('online', checkDatabase);