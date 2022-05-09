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
    let width = galleryElem.offsetWidth; 
    let step = width/4;
    previewElem.querySelector('.gallery__preview_close').addEventListener('click', closePreview);
    let arrowRight =  arrows.find(elem => elem.classList.contains('arrow_right')),
        arrowLeft =  arrows.find(elem => elem.classList.contains('arrow_left'));
    let max = -step * (galleryItems.length - 4);

   window.addEventListener('resize', () => {
       width = galleryElem.offsetWidth;
       step = width/4;
       position = 0;
       galleryItemsParent.style.setProperty('--translate', `${position}px`);
       arrowEnable ();
   })

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
               arrowEnable();
               if (position < max) return;
               galleryItemsParent.style.setProperty('--translate', `${position}px`);
               
           }
           if(elem.classList.contains('arrow_left')) {
            position += step;
            arrowEnable();
            if (position > 0) return;
            galleryItemsParent.style.setProperty('--translate', `${position}px`);
        }
       });
   });

   arrowEnable();

};

