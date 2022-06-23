const base_url = "http://65.2.127.123:3005";
// const base_url = "http://localhost:3005"

const urls = {
    //GET APIS
    getAllMainTypes: `${base_url}/mainType/getAllMainTypes`,

    // POST APIS
    addMianTypes: `${base_url}/mainType/addMianTypes`

}

module.exports = { urls };