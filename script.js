let currentPage = 1;
const totalPages = 15; // Update this based on the number of pages
const magazinePage = document.getElementById('magazinePage');

document.getElementById('nextPage').addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        magazinePage.src = `pages/page${currentPage}.jpg`;
    }
});

document.getElementById('prevPage').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        magazinePage.src = `pages/page${currentPage}.jpg`;
    }
});

document.getElementById('zoomIn').addEventListener('click', () => {
    magazinePage.style.transform = 'scale(1.3)';
});

document.getElementById('zoomOut').addEventListener('click', () => {
    magazinePage.style.transform = 'scale(1)';
});
