const images = document.querySelectorAll('.gallery img');
images.forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.createElement('div');
    modal.className = 'lightbox';
    modal.innerHTML = `<img src="${img.src}">`;
    modal.onclick = () => modal.remove();
    document.body.appendChild(modal);
  });
});
