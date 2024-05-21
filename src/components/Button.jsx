import Container from "./Container";

function Button() {

    return (
        <Container title="Button">
            <button className="bg-blue-500 font-bold px-6 py-2 rounded hover:bg-blue-600 text-white focus:ring-2 focus:ring-blue-300
                    border-2 border-white">
                Click me
            </button>
        </Container>
    )
}

export default Button;