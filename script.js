document.addEventListener('DOMContentLoaded', () => {
    const articleLinks = document.querySelectorAll('article a');
    articleLinks.forEach(link => {
        link.addEventListener('click', () => {
            alert('You are about to read blogs, press OK to continue');
        });
    });
});