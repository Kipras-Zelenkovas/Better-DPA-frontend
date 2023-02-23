import axios from "axios";

const URL = "http://127.0.0.1:8000/";

export const getData = async (
    setData,
    source,
    page = 1,
    shop = 1,
    per_page = 15
) => {
    try {
        await setTimeout(async () => {
            await axios
                .get(URL, {
                    params: {
                        shop: shop,
                        per_page: per_page,
                        page: page,
                    },
                    cancelToken: source.token,
                })
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 1000);
    } catch (error) {
        console.log(error);
    }
};
