const request = require('request')

const forecast = (lat, long, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3f9d9ce1389e8aeb5ad2acd52dac539b&query=' + lat + ',' + long + '&units=f'
    
    request({ url, json: true }, (error, {body}) => {
                if (error) {
                    callback('Unable to connect to weather service!', undefined)
                } else if (body.error) {
                    callback('Unable to find location', undefined)
                } else {
                    const {weather_descriptions, temperature, feelslike} = body.current
                    callback(undefined, `${weather_descriptions[0]}. It is currently ${temperature} degrees out. It feels like ${feelslike} degrees out.`)
                }
            })
}

module.exports = forecast
