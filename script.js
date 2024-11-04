const shareButton = document.getElementById('share_button');

const toggleShareButton = () => {
    shareButton.classList.toggle('active');
};

const toggleShareContainer = () => {
    const shareContainer = document.getElementById('share_container');
    shareContainer.classList.toggle('hidden');
}

const toggleShareOptions = () => {
    toggleShareButton();
    toggleShareContainer();
};

// Event listener
shareButton.addEventListener('click', () => toggleShareOptions());