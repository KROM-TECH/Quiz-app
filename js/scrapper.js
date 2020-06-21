function load() {
  fetch('https://questions.aloc.ng/api/q?subject=physics').then(function (res) {
    res.json()
      .then(function (dam) {
        console.log(dam)

        db.collection(dam.subject).doc((dam.data.id).toString()).set({
          id: dam.data.id,
          Question: dam.data.question,
          choice1: dam.data.option.a,
          choice2: dam.data.option.b,
          choice3: dam.data.option.c,
          choice4: dam.data.option.d,
          answer: dam.data.answer
        })
          .then(function () {
            console.log("Document successfully written!");
            db.collection(dam.subject).get().then(snap => {
              size = snap.size // will return the collection size
              console.log(size)
              // load()
            });
          })
          .catch(function (error) {
            console.error("Error writing document: ", error);
          });
      })
  })
}
// load()

// setInterval(function () { location.reload() }, 150000);


// 0: "english"
// 1: "mathematics"
// 2: "commerce"
// 3: "accounting"
// 4: "biology"
// 5: "physics"
// 6: "chemistry"
// 7: "englishlit"
// 8: "government"
// 9: "crk"
// 10: "geography"
// 11: "economics"
// 12: "irk"
// 13: "civiledu"
// 14: "insurance"
// 15: "currentaffairs"
// 16: "history"