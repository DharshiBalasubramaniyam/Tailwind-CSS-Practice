import Container from "./Container";
import Input from "./Input";
import Title from "./Title";

function Form() {

    return (
        <Container title="Form">
            <form className="w-full sm:w-2/3 lg:w-1/3 shadow-md p-3">
                <Title name="Create account"/>
                <Input label="Username" placeholder="John smith" name="username" error="Username is required!"/>
                <Input label="Email" placeholder="john123@gmail.com" name="email" error="Email is required!"/>
                <Input label="Password" placeholder="John smith" name="password" error="Password is required!"/>
                <Input label="Confirm Password" placeholder="John smith" name="cpassword" error="Confirm Password is required!"/>
                <div className="mb-2">
                    <button className="w-full bg-blue-500 p-2 mt-4 rounded hover:bg-blue-600 text-white focus:ring-2 focus:ring-blue-300">
                        Submit
                    </button>
                </div>
            </form>
        </Container>
    )
}

export default Form;