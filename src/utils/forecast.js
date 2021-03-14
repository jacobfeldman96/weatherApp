const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=b2672b0e22cc6d85b664d0dcbd23a045&query=' + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ". It is currently " 
            + body.current.temperature + " degress out and feels like " + body.current.feelslike + ". The humidity is " + body.current.humidity + "%.")
        }
    })
}

module.exports = forecast