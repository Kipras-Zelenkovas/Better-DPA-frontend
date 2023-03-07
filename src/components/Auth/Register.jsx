import { Formik } from "formik";
import { Link } from "react-router-dom";
import { register } from "../../functions/auth";

export const Register = () => {
    return (
        <div>
            <h1>My Form</h1>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                    name: "",
                }}
                onSubmit={(values) => {
                    register(values);
                }}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
                        <input
                            className="border border-black block"
                            type="text"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.name}
                            name="name"
                        />
                        <input
                            className="border border-black block"
                            type="email"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.email}
                            name="email"
                        />
                        <input
                            className="border border-black block"
                            type="password"
                            onChange={props.handleChange}
                            onBlur={props.handleBlur}
                            value={props.values.password}
                            name="password"
                        />
                        <button
                            className="block border border-black"
                            type="submit"
                        >
                            Submit
                        </button>
                        <Link to="/">Already have an account?</Link>
                    </form>
                )}
            </Formik>
        </div>
    );
};
