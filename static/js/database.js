// load database

// let dbData

// const db = new PouchDB("phrases");
// const remoteCouch = false;

// //subscribe to changes
// db.changes({
//   since: "now",
//   live: true,
// }).on("change", getAllItems);

// //add single item
// function addPhrase(p) {
//   let newEntry = {
//     createdAt: new Date().toISOString(),
//     text: p,
//     machineGenerated: false,
//   };

//   db.post(newEntry, (err, result) => {
//     if (!err) {
//       console.log("successfully added new phrase to self-compassion database");
//     }
//   });
// }

// // add multiple items
// function injectData(r) {
//   db.bulkDocs(r)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// }


// //get all items
// function getAllItems() {
//   db.allDocs({ include_docs: true, descending: true }, (err, res) => {
//     console.log(res.rows)
    
//     // for (let data in res.rows) {
//     //   let d = data.doc
//     //   let text = d.text
//     //   let createdAt = d.createdAt
//     //   let id = d.id
//     //   console.log(text, createdAt)
//     // }
//     // ;
//   });
// }

// getAllItems()



// function findById(id){
//   db.get(id, {attachments: true}).then((res)=>{console.log(res)}).catch((err)=>console.log(err))
// }

// // findById("f45ae8fa-2b5f-44bc-bff9-8a66d15f58f9")






// // delete item
// function deleteItem(i) {
//   db.remove(i);
// }


// // function WATCHOUTDELETEALL() {
// //   db.destroy()
// //     .then((res) => {
// //       console.log(res);
// //     })
// //     .catch((err) => console.log(err));
// // }




