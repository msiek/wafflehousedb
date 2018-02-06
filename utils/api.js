require('request');
const request = require('request-promise-native')
const url = 'https://api.sweetiq.com/store-locator/public/locations/587d236eeb89fb17504336db?categories=&tag=&perPage=2000&page=1&search=&searchFields[0]=name'
exports.waffleHouseDB = function () {
    return new Promise((resolve, reject) => {
        request.get(url)
            .then(body => {
                try{
                    return JSON.parse(body).records.map(wf => {
                        results = {
                            branch: wf.branch,
                            name: wf.name,
                            address: wf.address,
                            city: wf.city,
                            state: wf.province,
                            postalcode: wf.postalCode,
                            phone: wf.phone,
                            website: wf.website,
                            description: wf.snippetDescription,
                            geo: {
                              lat: wf.geo[1],
                                long: wf.geo[0]
                            }
                        };
                        console.log(results);
                        return results
                    });
                }catch(err){
                    return reject({
                        url,
                        error: err,
                    });
                }
            })
            .then(resolve)
            .catch(err => {
                return reject({
                    url,
                    error:err,
                })
            });
    });
};
