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

    console.log(`Send the ip adress ${ipadress}`)

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
                <b>Time zone:</b><p style="margin:0;padding:2.5% 0%">${data.data.timezone}</p>
                <b>Region:</b><p style="margin:0;padding:2.5% 0%">${data.data.regionName}</p>
                <b>Country:</b><p style="margin:0;padding:2.5% 0%">${data.data.country}</p>
                <b>City:</b><p style="margin:0;padding:2.5% 0%">${data.data.city}</p>
                <b>Latitude:</b><p style="margin:0;padding:2.5% 0%">${data.data.lat}</p>
                <b>Longitude:</b><p style="margin:0;padding:2.5% 0%">${data.data.lon}</p>
            </div>
            `

        }).catch((err) => {
            console.log(err)
        })
}


