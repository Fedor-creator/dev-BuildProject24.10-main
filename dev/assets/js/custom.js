// Burger-Menu 
const headerNav = document.querySelector('.header-nav');
const btnBurger = document.querySelector('.hamburger');

btnBurger.addEventListener('click', () => {
    headerNav.classList.toggle('show');
    btnBurger.classList.toggle('is-active');
})

const installGenplan = () => {
    const address = document.querySelector('#address')
    const floor = document.querySelector('#floor')
    const flat = document.querySelector('#flat')
    const builds = document.querySelectorAll('.build-path')


    builds.forEach(build => {
        build.addEventListener('mouseover', () => {
            const buildAddress = build.getAttribute('data-address')
            const buildFloor = build.getAttribute('data-floor-quantity')
            const buildFlat = build.getAttribute('data-flat-quantity')

            address.innerHTML = buildAddress;
            floor.innerHTML = buildFloor;
            flat.innerHTML = buildFlat;
        })
    })

	const addBooking =(builds)=> builds.forEach(build =>{
		 const buildLink = build.closest('a')
		 const flatQuantity = build.getAttribute('data-flat-quantity')
		 // const flatQuantityToNumber = Number(flatQuantity);
		 // const flatQuantityToNumber = flatQuantity * 1
		 const flatQuantityToNumber = parseInt(flatQuantity)
		flatQuantityToNumber ? flatQuantityToNumber >= 0 : buildLink.classList.add('booking')

		buildLink.addEventListener('click', (event)=> {
			if (buildLink.classList.contains('booking')) {
				event.preventDefault()
			}
		})

	})
	addBooking(builds)
}

const installFloor = () => {
    console.log('installFloor');
}

document.querySelector('.genplan') ? installGenplan() : null
document.querySelector('.floor-plan') ? installFloor() : null
 

const obj = [
    {
        id: 1,
        name: "Bill",
        age: 22,
    },
    {
        id: 2,
        name: "Bill2",
        age: 42,
    },
    {
        id: 3,
        name: "Bill3",
        age: 23,
    },
    {
        id: 4,
        name: "Bill4",
        age: 12,
    }
]
console.log(obj);
console.table(obj)


ct