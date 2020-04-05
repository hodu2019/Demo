document.addEventListener('DOMContentLoaded', (event) => {

    // sign up
    document.getElementById('signup-form').addEventListener('submit', (e) => {
        e.preventDefault()
        let email = document.getElementById('signup-email').value;
        let pass = document.getElementById('signup-pass').value;
        let passcf = document.getElementById('signup-passcf').value;
        let warning_message = document.getElementById('pass-warning');
        if (pass === passcf) {
            let promise = auth.createUserWithEmailAndPassword(email, pass)
            promise.catch(e => {
                warning_message.classList.remove('hide')
                warning_message.innerHTML = e.message
            })
            promise.then(() => {
                warning_message.classList.add('hide');
                document.getElementById('signup-form').reset();
            })
        } else {
            warning_message.classList.remove('hide')
            warning_message.innerHTML = 'Password confirm khong dung'
        }
    })

    // login
    document.getElementById('login-form').addEventListener('submit', (e) => {
        e.preventDefault();
        let email = document.getElementById('login-email').value;
        let pass = document.getElementById('login-pass').value;
        let promise = auth.signInWithEmailAndPassword(email, pass)
        promise.catch(e => console.log(e.message))
    })

    // logout
    document.getElementById('logout').addEventListener('click', () => {
        auth.signOut().then(() => {
            console.log('bye')
            userLogout()
        });
    })

    // real time
    function realTime() {
        auth.onAuthStateChanged(firebaseUser => {
            if (firebaseUser) {
                console.log(firebaseUser)
                userLogin();
                // updateUser();

            } else {
                console.log('not logged in')
                userLogout();
            }
        })
    }
    realTime();

    // update information user

    document.getElementById('update-user').addEventListener('submit', (e) => {
        e.preventDefault();
        let nameUser = document.getElementById('name-user').value;
        let imageUser = document.getElementById('avatar-user').files[0]
        // update avatar
        let storageRef;
        if (document.getElementById('avatar-user').files.length > 0) {
            storageRef = storage.ref(`users/avatar/id:__${auth.currentUser.uid}__avatar`)
            deleteImg(storageRef, imageUser);
        }

        // update user name
        if (nameUser.length > 0) {
            auth.currentUser.updateProfile({
                displayName: nameUser
            }).then(function () {
                // Update successful.
                console.log('cap nhat user thanh cong')
                $('#user').text(auth.currentUser.displayName)
            }).catch(function (error) {
                // An error happened.
                console.log(error)
                console.log('cap nhat user eo thanh cong')
            });
        }

    })


    // upload image
    function uploadImg(storageRef, imageUser) {
        let task = storageRef.put(imageUser)
        let uploader = document.getElementById('uploader')
        task.on('state_changed',
            function progress(snapshot) {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage
            },
            function error(err) {
                console.log(err.message)
            },
            function complete() {
                console.log('upload img complete')
                storageRef.getDownloadURL().then((url) => {
                    console.log('image url: ' + url)
                    auth.currentUser.updateProfile({
                        photoURL: url
                    }).then(function () {
                        // Update successful.
                        console.log('cap nhat user thanh cong')
                        document.querySelector('.img-avatar').src = auth.currentUser.photoURL
                    }).catch(function (error) {
                        // An error happened.
                        console.log(error)
                        console.log('cap nhat user khong thanh cong')
                    });
                })
            }
        )
    }

    // delete image
    function deleteImg(storageRef, imageUser) {
        // Create a reference to the file to delete
        // let desertRef = storageRef.child(`users/avatar`);
        // Delete the file
        storageRef.delete().then(function () {
            console.log('File deleted successfully')
            uploadImg(storageRef, imageUser)
        }).catch(function (error) {
            console.log(error.message)
            uploadImg(storageRef, imageUser)
        });
    }

})
