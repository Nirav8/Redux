import axios from "axios";
import idx from "idx";
import { urls } from "./constatn.js";


async function getAllMainTypes(data) {
    console.log(data, "this variable will help in post methods")
    let config = {
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    };
    return axios.get(urls.getAllMainTypes, {}, config)
        .then((res) => {
            console.log(res)
            const status = idx(res, (_) => _.status);
            const data = idx(res, (_) => _.data);

            //TODO sasve this result in local storage
            return { status, data };
        })
        .catch((err) => {
            const status = idx(err, (_) => _.status);
            const message = err
            return { status, message };
        });
}

export { getAllMainTypes }