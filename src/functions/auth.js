import axios from "axios";
import { redirect } from "react-router-dom";

const URL = "http://127.0.0.1:8000/";

const auth = axios.create({
    baseURL: URL,
    withCredentials: true,
});

export const login = (values) => {
    try {
        auth.post(URL + "login", {
            email: values.email,
            password: values.password,
        })
            .then((res) => {
                localStorage.setItem("key", res.data.token);
                console.log(res.data);
                redirect("/");
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        console.log(error);
    }
};

export const register = (values) => {
    try {
        auth.post(URL + "register", {
            name: values.name,
            email: values.email,
            password: values.password,
        })
            .then((res) => {
                console.log(res.data);
                redirect("/");
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        console.log(error);
    }
};

export const logout = () => {
    try {
        auth.get(URL + "logout", {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("key")}`,
            },
        })
            .then((res) => {
                console.log(res.data);
                localStorage.removeItem("key");
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (error) {
        console.log(error);
    }
};
