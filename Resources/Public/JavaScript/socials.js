// share - social media menu
document.addEventListener('DOMContentLoaded', () => {
    const shareWrapper = document.querySelector('.sticky-share-wrapper');
    const triggerBtn = document.getElementById('shareToggleBtn');

    // Toggle dropdown state
    triggerBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = shareWrapper.classList.toggle('is-open');
      triggerBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!shareWrapper.contains(e.target) && shareWrapper.classList.contains('is-open')) {
        shareWrapper.classList.remove('is-open');
        triggerBtn.setAttribute('aria-expanded', 'false');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && shareWrapper.classList.contains('is-open')) {
        shareWrapper.classList.remove('is-open');
        triggerBtn.setAttribute('aria-expanded', 'false');
        triggerBtn.focus();
      }
    });
  });