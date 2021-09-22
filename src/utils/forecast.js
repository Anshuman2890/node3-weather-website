const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=3106a53143dac9e5261da807ecc85c66&query=${latitude},${longitude}`

    request( {url, json: true}, (error, {body}) => {

        if(error) {
            callback('Unable to connect to the weather services', undefined)
            } else if (body.error) {
                callback('Unable to find the location', undefined)
            } 
            else {
                callback(undefined, `${body.current.weather_descriptions}. It is currently ${body.current.temperature} degrees out. It feels like ${body.current.feelslike} degrees out. The humidity is ${body.current.humidity}%.`
                )
            }
            
            })
}

module.exports = forecast
