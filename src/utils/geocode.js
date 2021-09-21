    const request = require('postman-request')
 


    const geocode = (address, callback) => {
        
        const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW5zaHVtYW4xNDExIiwiYSI6ImNrdGhmYXo5NzByaGQycG1yYjBiaXJlb2gifQ.7fq_2gbKDVf6oGS8pxaxFw&limit=1`
        request({ url, json: true}, (error, {body}) => {
            if(error) {
                callback('Unable to connect to the location services', undefined)
            } else if (body.features.length === 0) {
                callback('Unable to find the name of the location', undefined)
            } else {
                callback(undefined, {
                    latitude: body.features[0].center[1],
                    longitude: body.features[0].center[0],
                    location: body.features[0].place_name
                })
            }
        })
    }

module.exports = geocode