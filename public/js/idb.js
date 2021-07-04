//creating a variable to hold db connnection
let db;
const request =indexedDB.open("BudgetDB",1);

request.onupgradeneeded= async(e)=>{
    db =e.target.result;

    //creating an object store and set  autoincrerment to true
    const BudgetStore= await db.creatObjectStore("BudgetStore",{autoIncremenrt:true});

};

request.onsuccess = e =>{
    db = e.target.result;
    if (navigator.online){
        checkDatabase();
    }
};
reques.onerror = e =>{
    console.error(e);
};

function saveRecord(record) {
    // to create a transaction on the pending db with readwrite access
    db = request.result;

        // this will access your pending object store
    const transaction = db.transaction(["BudgetStore"], "readwrite");
    const BudgetStore = transaction.objectStore("BudgetStore");
    
  // this will add record to your store with add method.
    BudgetStore.add(record);
}

function checkDatabase() {
   
    
     // open a transaction on your pending db
    db = request.result;
    
    // access your pending object store
    const transaction = db.transaction(["BudgetStore"], "readonly");
    const BudgetStore = transaction.objectStore("BudgetStore");

  // get all records from store and set to a variable
    const getAll = BudgetStore.getAll();
  
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
            const transaction = db.transaction(["BudgetStore"], "readwrite");

            //  this will access your pending object store
            const BudgetStore = transaction.objectStore("BudgetStore");

            //this will clear all items in your store
            BudgetStore.clear();
          });
        }
    };
}
  
  // Adding listener to check network connection of app
  window.addEventListener('online', checkDatabase);