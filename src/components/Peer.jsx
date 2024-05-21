import Container from "./Container";

function Peer() {

    return (
        <Container title="Peer Example">
            <input type="checkbox" id="toggle" class="peer" />
            <label htmlFor="toggle" className="ml-2 inline-block">Toggle me</label>
            <p className="mt-4 peer-checked:text-blue-500">
                This text changes color when the checkbox is checked.
            </p>
        </Container>
    )
}

export default Peer;