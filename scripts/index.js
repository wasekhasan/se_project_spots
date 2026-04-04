const editProfileButton = document.querySelector(".profile__edit-button");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileCloseButton = editProfileModal.querySelector(
  ".modal__close-button"
);
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileNameInput = editProfileModal.querySelector(
  "input[name='name']"
);
const editProfileDescriptionInput = editProfileModal.querySelector(
  "input[name='description']"
);

const newPostButton = document.querySelector(".profile__add-button");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseButton = newPostModal.querySelector(".modal__close-button");
const newPostForm = newPostModal.querySelector(".modal__form");
const newPostLinkInput = newPostModal.querySelector("input[name='link']");
const newPostCaptionInput = newPostModal.querySelector(
  "input[name='caption']"
);

const profileNameElement = document.querySelector(".profile__name");
const profileDescriptionElement = document.querySelector(
  ".profile__description"
);

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}

editProfileButton.addEventListener("click", function () {
  editProfileNameInput.value = profileNameElement.textContent;
  editProfileDescriptionInput.value = profileDescriptionElement.textContent;
  //openModal(editProfileModal);
      document.querySelector("#new-post-modal").classList.add('modal_is-opened');

});

editProfileCloseButton.addEventListener("click", function () {
  closeModal(editProfileModal);
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameElement.textContent = editProfileNameInput.value;
  profileDescriptionElement.textContent = editProfileDescriptionInput.value;
  closeModal(editProfileModal);
}

editProfileForm.addEventListener("submit", handleProfileFormSubmit);

newPostButton.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseButton.addEventListener("click", function () {
  closeModal(newPostModal);
});

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  console.log(newPostLinkInput.value);
  console.log(newPostCaptionInput.value);
  closeModal(newPostModal);
}

newPostForm.addEventListener("submit", handleAddCardSubmit);

document.querySelector(".profile__add-button").addEventListener('click', (e) => {
    document.querySelector("#newPostModal").classList.add('modal_is-opened');

});

document.querySelector("#cancelNewPost").addEventListener('click', (e) => {
    document.querySelector("#editProfileModal").classList.remove('modal_is-opened')
});

//document.querySelector("#cancelEditProfile").addEventListener('click', (e) => {
  //  document.querySelector("#newPostModal").classList.remove('modal_is-opened')
//});

