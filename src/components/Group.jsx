import Container from "./Container";

function Group() {

    return (
        <Container title="Group Example">
            <div class="group p-4 border rounded-lg">
                <h2 class="text-lg font-bold group-hover:text-blue-500">
                    Group Hover Title
                </h2>
                <p class="text-gray-700 group-hover:text-blue-400">
                    This text changes color when the group is hovered.
                </p>
            </div>
        </Container>
    )
}

export default Group;