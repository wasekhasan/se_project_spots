
document.querySelector(".profile__edit-button").addEventListener('click', (e) => {
    document.querySelector("#editProfileModal").classList.add('modal_is-opened')
});

document.querySelector(".profile__add-button").addEventListener('click', (e) => {
    document.querySelector("#newPostModal").classList.add('modal_is-opened');
    //console.log(e)

});

document.querySelector("#cancelNewpost").addEventListener('click', (e) => {
    document.querySelector("#editProfileModal").classList.remove('modal_is-opened')
});

document.querySelector("#cancelEditProfile").addEventListener('click', (e) => {
    document.querySelector("#newPostModal").classList.remove('modal_is-opened')
});

