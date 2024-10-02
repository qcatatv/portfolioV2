import Sneaker from '../assets/sneakerstore.jpg'
import Restaurant from '../assets/restaurantwebsite.jpg'

function Cards() {
  return (
    <div className='grid grid-cols-2 gap-10'>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={Sneaker} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Sneaker Store</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Step into summer with iconic sneakers and unbeatable comfort. Get up to 30% off on top brands—built with HTML, CSS, JavaScript, React.js, Photoshop.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition ease-in-out duration-300 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Take a look
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={Restaurant} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Restaurant</h5>
                </a>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Enjoy the tastiest dishes from around the world—burgers, pizza, fries, and more—all prepared fresh with love. Built with HTML, CSS, JavaScript, React.js.</p>
                <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white transition ease-in-out duration-300 bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Take a look
                    <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
  )
}

export default Cards
