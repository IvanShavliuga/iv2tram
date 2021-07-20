var indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB
var transaction = window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || { READ_WRITE: 'readwrite' }
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
if (!window.indexedDB) {
  console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.")
}
const customerData = [
  { ssn: '444-44-4444', name: 'Bill', age: 35, email: 'bill@company.com' },
  { ssn: '555-55-5555', name: 'Donna', age: 32, email: 'donna@home.org' }
]
const dbName = 'the_name'

var request = indexedDB.open(dbName, 2)
request.onupgradeneeded = function (event) {
  var db = event.target.result
  var objectStore = db.createObjectStore('customers', { keyPath: 'ssn' })
  objectStore.createIndex('name', 'name', { unique: false })
  objectStore.createIndex('email', 'email', { unique: true })
  objectStore.transaction.oncomplete = function (event) {
    var customerObjectStore = db.transaction('customers', 'readwrite').objectStore('customers')
    customerData.forEach(function (customer) {
      customerObjectStore.add(customer)
    })
  }
}
console.log(transaction)
const db = {
  transaction,
  indexedDB
}
export default db
