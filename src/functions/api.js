import axios from "axios";

const URL = "http://127.0.0.1:8000/";

export const getData = async (
    setData,
    source,
    page = 1,
    shop = 1,
    sorting,
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
                        order: sorting,
                    },
                    cancelToken: source.token,
                })
                .then((res) => {
                    setData(res.data);
                    console.log(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 1000);
    } catch (error) {
        console.log(error);
    }
};

export const getOrderReports = async (setData, source, shop) => {
    try {
        await setTimeout(async () => {
            await axios
                .get(URL + "orders", {
                    params: {
                        shop: shop,
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

export const getOrder = async (setData, id, shop, source) => {
    try {
        await setTimeout(async () => {
            await axios
                .get(URL + "order", {
                    params: {
                        shop: shop,
                        id: id,
                    },
                    cancelToken: source.token,
                })
                .then((res) => {
                    setData(res.data);
                })
                .catch((err) => {
                    console.log(err);
                });
        }, 500);
    } catch (error) {
        console.log(error);
    }
};
