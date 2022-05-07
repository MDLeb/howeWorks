const gallery = (gallery) => {
   let galleryElem = document.querySelector(`.${gallery}`);
   let galleryItemsParent = galleryElem.querySelector('ul');
   let galleryItems = Array.from(galleryElem.querySelectorAll('.gallery__thumbs img'));
   
   const previewElem = galleryElem.querySelector('.gallery__preview')

   const showItem = (href) => {
        if (previewElem.querySelector('img')) previewElem.querySelector('img').remove(); 
        let item = document.createElement('img');
        item.src = href;
        previewElem.append(item);
        previewElem.classList.remove('hide');
   }
   const closePreview = () => {
       previewElem.classList.add('hide');
   }

   galleryItems.forEach((elem) => {
       elem.addEventListener('click', (event) => {
           event.preventDefault();
           let dataHref = event.target.parentNode.href;
           showItem(dataHref);
       })
   });

    const arrows = Array.from(galleryElem.querySelectorAll('.arrow'));
    let position = 0;
    let step = galleryElem.offsetWidth/4;
    previewElem.querySelector('.gallery__preview_close').addEventListener('click', closePreview);
    let arrowRight =  arrows.find(elem => elem.classList.contains('arrow_right')),
        arrowLeft =  arrows.find(elem => elem.classList.contains('arrow_left'));
    let max = -step * (galleryItems.length - 4);

   const arrowEnable = () => {
        if (position <= max) 
        arrowRight.style.display = 'none';
        else arrowRight.style.display = 'block';
        
        if (position >= 0) 
            arrowLeft.style.display = 'none';
        else arrowLeft.style.display = 'block';
    }

   arrows.forEach((elem) => {
       elem.addEventListener('click', () => {
           if(elem.classList.contains('arrow_right')) {
               position += -step;
               galleryItemsParent.style.setProperty('--translate', `${position}px`);
               arrowEnable();
           }
           if(elem.classList.contains('arrow_left')) {
            position += step;
            galleryItemsParent.style.setProperty('--translate', `${position}px`);
            arrowEnable();
        }
       });
   });

   arrowEnable();

};

