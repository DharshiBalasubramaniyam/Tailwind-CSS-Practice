import Container from "./Container";

function Input({label, name, placeholder, error}) {

    return (
        <div className="mb-2">
            <label 
                className="mb-2"
            >{label}</label>
            <input 
                type="text" 
                name={name}
                className="w-full p-2 bg-gray-300 rounded outline-none border-2 border-gray-300 focus:border-blue-500"
                placeholder={placeholder} 
            />
            <small 
                className="text-red-500"
            >{error}</small>
        </div>
    )
}

export default Input;