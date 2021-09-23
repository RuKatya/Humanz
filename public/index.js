//Filter
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

//IPAPI
function hendleipapi(e) {
    e.preventDefault();

    const ipadress = e.target.children.ipadress.value

    console.log(ipadress)

    fetch('/ipapi', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ipadress
        })
    }).then(r => r.json())
        .then(data => {
            console.log(data)
        })
}