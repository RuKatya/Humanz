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

    let ipadress = e.target.children.ipadress.value

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
            document.getElementById('ipapi').innerHTML = `
            <div style="
                display: grid;
                grid-template-columns: repeat(2, 0.5fr);
                justify-items: start;
                align-items: center;
                width: 93%;
                margin: 1% auto;
            ">
                <h3>Time zone:</h3><p>${data.data.timezone}</p>
                <h3>Region:</h3><p>${data.data.regionName}</p>
                <h3>Country:</h3><p>${data.data.country}</p>
                <h3>City:</h3><p>${data.data.city}</p>
                <h3>Latitude:</h3><p>${data.data.lat}</p>
                <h3>Longitude:</h3><p>${data.data.lon}</p>
            </div>
            `
        }).catch((err) => {
            console.log(err)
        })
}


