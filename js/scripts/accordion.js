document.addEventListener('DOMContentLoaded', () => {
    const accordions = (aList, aHeader, aContent) => {
      const items = document.querySelectorAll(aList);
      if (!items.length) return;

      items.forEach(el => {
        const header = el.querySelector(aHeader);
        const content = el.querySelector(aContent);
  
        header.addEventListener('click', () => {
          if (el.dataset.open !== 'true') {
            // Close all siblings
            items.forEach(item => {
              if (item !== el) {
                item.dataset.open = 'false';
                const itemHeader = item.querySelector(aHeader);
                if (itemHeader) {
                  itemHeader.classList.remove('open');
                }
                const itemContent = item.querySelector(aContent);
                if (itemContent) {
                  itemContent.style.maxHeight = '';
                }
              }
            });
  
            // Open the clicked one
            el.dataset.open = 'true';
            header.classList.add("open");
            content.style.maxHeight = `${content.scrollHeight}px`;
          } else {
            el.dataset.open = 'false';
            header.classList.remove("open");
            content.style.maxHeight = '';
          }
        });
  
        const onResize = () => {
          if (el.dataset.open === 'true') {
            if (Number(content.style.maxHeight) !== content.scrollHeight) {
              content.style.maxHeight = `${content.scrollHeight}px`;
            }
          }
        };
  
        window.addEventListener('resize', onResize);
      });
    };
    accordions('.accordion-list', '.accordion-header', '.accordion-content');
  });