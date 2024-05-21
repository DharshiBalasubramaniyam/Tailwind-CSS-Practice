function Card() {
    return (
        <div className="bg-white sm:w-350 w-full border hover:shadow-lg transition duration-200 relative cursor-pointer rounded overflow-hidden group">
            <img className="w-full h-64  transition-transform duration-300 ease-in-out group-hover:scale-110" src="./image.jpg" alt="product image" />
            <div className="p-2">
                <div className="flex">
                    <div className="mr-auto font-bold">Name</div>
                    <div className="font-bold">$20</div>
                </div>
                <p className="w-full text-justify text-sm">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis ducimus saepe, veritatis sapiente quasiab incidunt est!</p>
                <button className="bg-blue-500 w-full py-2 mt-4 rounded hover:bg-blue-600 text-white focus:ring-2 focus:ring-red-300">
                    <i className="fa fa-shopping-cart mr-2 text-sm" aria-hidden="true"></i>Add to cart
                </button>
            </div>
            <button className="bg-blue-500 py-1 px-2 rounded hover:bg-blue-600 text-white focus:ring-2 focus:ring-blue-300 absolute top-2 right-2">
                <i className="fa fa-heart" aria-hidden="true"></i>
            </button>
        </div>
    )
}

export default Card;