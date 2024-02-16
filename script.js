let BASE_URL = 'https://eduport.webestica.com/'
let products=[
    {
        thumbnail: "assets/images/courses/4by3/08.jpg",
        title: "Sketch from A to Z: for app developer",
        description: "Proposal indulged no do sociable he throwing settling.",
        rating: 4.6
    },
    {
        thumbnail: "assets/images/courses/4by3/02.jpg",
        title: "Graphic Design MassterClass",
        description: "Rooms oh fully taken by worse do Points afraid but may end",
        rating: 4.9
    },
    {
        thumbnail: "assets/images/courses/4by3/03.jpg",
        title: "Create a design system with Figma",
        description: "Rooms oh fully taken by worse do Points afraid but may end",
        rating: 4.8
    },
    {
        thumbnail: "assets/images/courses/4by3/07.jpg",
        title: "Deep learning with react",
        description: "Far advanced settling say finished raillery. Offered chiefly",
        rating: 4.6
    },
    {
        thumbnail: "assets/images/courses/4by3/11.jpg",
        title: "Build responsive website with HTML",
        description: "Proposal indulged no do sociable he throwing settling.",
        rating: 4.3
    },
    {
        thumbnail: "assets/images/courses/4by3/12.jpg",
        title: "Build responsive design with CSS",
        description: "Proposal indulged no do sociable he throwing settling.",
        rating: 4.9
    },
    {
        thumbnail: "assets/images/courses/4by3/04.jpg",
        title: "Learn invision",
        description: "Arrived off she elderly beloved him Course regard to up he hardly.",
        rating: 4.6
    },
    {
        thumbnail: "assets/images/courses/4by3/09.jpg",
        title: "javaScript: Full Understanding",
        description: "Proposal indulged no do sociable he throwing settling.",
        rating: 4.5
    },
]
let SECTION = document.querySelector('section')
products.map((product)=>{
    console.log(product)
    SECTION.innerHTML += `
    

<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
<a href="#">
    <img class="p-8 rounded-t-lg" src="${BASE_URL}${product.thumbnail}" alt="product image" />
</a>
<div class="px-5 pb-5">
    <a href="#">
        <h5 class="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">${product.title}</h5>
    </a>
    <h5 class="text-xl font-normal tracking-tight text-gray-900 dark:text-white">${product.description}</h5>
    <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
            <svg class="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
        </div>
    </div>
    <div class="flex items-center justify-between">
        <span class="text-xl font-bold text-gray-900 dark:text-white">Rating : ${product.rating}</span>
    </div>
</div>
</div>

    `
})