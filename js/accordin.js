const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  
  header.addEventListener('click', () => {
    // Check if the clicked item is already active
    const isActive = item.classList.contains('active');
    
    // Close all items
    accordionItems.forEach(i => {
      i.classList.remove('active');
    });

    // If it wasn't active, toggle the clicked item
    if (!isActive) {
      item.classList.add('active');
    }
  });
});
