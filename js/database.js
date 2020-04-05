// const location_city = document.querySelector('#cafe-list');
// const form = document.querySelector('#add-cafe-form');
// function renderLocation(doc){
//     let li = document.createElement('li');
//     let city = document.createElement('span');
//     let des = document.createElement('span');

//     li.setAttribute('data-id', doc.id);
//     city.textContent = doc.data().city;
//     des.textContent = doc.data().description;
//     li.appendChild(city)
//     li.appendChild(des);
//     location_city.appendChild(li)
// }
// // getting data
// get_dataUser = (userID) => {
//     db.collection("users").doc(userID).get().then(function (doc) {
//         if (doc.exists) {
//             console.log("Document data:", doc.data());
//             console.log(doc.data().name)
//             const userName = doc.data().name;
//             const userAvatar = doc.data().avatarUrl;
//         } else {
//             // doc.data() will be undefined in this case
//             console.log("No such document!");
//         }
//     }).catch(function (error) {
//         console.log("Error getting document:", error);
//     });
// }

// // saving data
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     db.collection('location').doc(form.city.value).set({
//         city: form.city.value,
//         description: form.description.value,
//         "short-description": form.short_description.value
//     });
//     form.description.value = '';
//     form.city.value = '';
//     form.short_description.value = '';
// });
// Create a reference under which you want to list
var listRef = storage.ref('Masonry');

// Find all the prefixes and items.
listRef.listAll().then(function (res) {

    res.prefixes.forEach(function (folderRef) {
        // All the prefixes under listRef.
        // You may call listAll() recursively on them.
        console.log('not bach ' + folderRef)
    });

    
    res.items.forEach(function (itemRef, index) {
        // All the items under listRef.
        itemRef.getDownloadURL().then((url) => {
    
            console.log('image url: ' + url)
            masonryIndex(url, index)
            
        }).then(function () {
            setTimeout(function () {
                let grid = document.getElementsByClassName('grid-item')
                for(let i = 0; i < grid.length; i++){
                // debugger
                    let girdWidth = grid[i].offsetWidth
                    let gridHeight = grid[i].offsetHeight
                    let ratio = Math.abs(girdWidth / gridHeight);
                    if(ratio.toFixed(2) > 1){
                        grid[i].classList.add('grid-item--width2')
                    }
                console.log(ratio.toFixed(2))
                }
                $('#masonry-section .grid').masonry({
                    itemSelector: '.grid-item',
                    columnWidth: '.grid-sizer',
                    gutter: 10,
                    // gutter: '.gutter-sizer',
                    fitWidth: true,
                    percentPosition: true
                });
            }, 1000);

        })
    });

}).catch(function (error) {
    console.log(error)
    // Uh-oh, an error occurred!
});