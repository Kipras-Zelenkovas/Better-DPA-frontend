import { Formik } from "formik";
import { Link } from "react-router-dom";
import { login } from "../../functions/auth";

export const Login = () => {
    return (
        <div>
            <h1>My Form</h1>
            <Formik
                initialValues={{
                    email: "",
                    password: "",
                }}
                onSubmit={(values) => {
                    login(values);
                }}
            >
                {(props) => (
                    <form onSubmit={props.handleSubmit}>
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
                            className="border border-black block"
                            type="submit"
                        >
                            Submit
                        </button>
                        <Link to="/register">Don't have an account?</Link>
                    </form>
                )}
            </Formik>
        </div>
    );
};
