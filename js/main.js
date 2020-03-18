

let search = document.getElementById('search-input');
let a = document.getElementsByClassName('thumbnail');

search.addEventListener('keyup', () => {
    const input = search.value.toLowerCase();

    for (let i = 0; i < a.length; i += 1) {
        const attrData = a[i].getAttribute('data-title');
        if (attrData.toLowerCase().indexOf(input) > -1) {
            a[i].style.display = "";
            } else {
            a[i].style.display = "none";
            }
    }
});

search.addEventListener('search-input', () => {
    if (event.target.value === '') {
      for (let i = 0; i < a.length; i += 1) {
        a[i].style.display = "";
      }
    }
  });


  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'showImageNumberLabel': false
  })