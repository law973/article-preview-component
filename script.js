const shareButton = document.getElementById('share_button');

const toggleShareButton = () => {
    shareButton.classList.toggle('active');
};

const toggleShareContainer = () => {
    const shareContainer = document.getElementById('share_container');
    shareContainer.classList.toggle('hidden');
}

const togglePublicationContainer = () => {
    const publicationContainer = document.getElementById('publication_container');
    publicationContainer.classList.toggle('hidden');
}

const toggleShareOptions = () => {
    toggleShareButton();
    toggleShareContainer();
    togglePublicationContainer();
};

// Event listener
shareButton.addEventListener('click', () => toggleShareOptions());