const filter = (portfolio) => {
    let portfolioElem = document.querySelector(`#${portfolio}`);
    let portfolioItems = Array.from(portfolioElem.querySelectorAll('.list li'));
    let filterBtns = Array.from(portfolioElem.querySelectorAll('.filter li'));

    filterBtns.forEach(elem => {
        elem.addEventListener('click', (event) => {
            filterBtns.forEach(btn => {
                if (btn.classList.contains('active'))
                    btn.classList.remove('active');
            })
            event.target.classList.toggle('active');
            let filter = event.target.dataset.filter;
            if (filter == 'all') {
                portfolioItems.forEach(item => {
                    if(item.classList.contains('hide')) 
                        item.classList.remove('hide');
                });
            } else {
                portfolioItems.forEach(item => item.classList.add('hide'));
                let categoryItems = portfolioItems.filter(elem => elem.dataset.filter == filter);
                categoryItems.forEach(item => {
                    if(item.classList.contains('hide')) item.classList.remove('hide')
                });
            }
            
        });
    });
}