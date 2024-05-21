import Card from "./Card";
import Container from "./Container";

function Grid() {
    return (
        <Container title="Grid">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5 px-5">
                <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/> <Card/>
            </div>
        </Container>
    )
}

export default Grid;