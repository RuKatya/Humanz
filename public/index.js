let filter = function () {
    let input = document.getElementById('filter-input');

    input.addEventListener('keyup', function () {

        let filter = input.value.toLowerCase()
        let filterElements = document.querySelectorAll('#filter-list');

        filterElements.forEach(item => {
            if (item.innerHTML.toLowerCase().indexOf(filter) > -1) {
                item.style.display = "";
            } else {
                item.style.display = 'none';
            }
        })
    })
}

filter();