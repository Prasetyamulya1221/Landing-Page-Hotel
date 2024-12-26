function toggleDescription(index) {
    const description = document.getElementById(`description-${index}`);
    description.style.display = description.style.display === 'block' ? 'none' : 'block';
}