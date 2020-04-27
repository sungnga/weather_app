const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1Ijoic3VuZ25nYSIsImEiOiJjazB2cW1kNTEwdXdwM2NvMDBmM2kxaTloIn0.fO_TBwhds2S0-PmbeL2nqw&limit=1'

    request({ url, json: true }, (err, { body }) => {
        if (err) {
            callback('Unable to connect to location services!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try another search', undefined)
        } else {
            const {center, place_name} = body.features[0]
            callback(undefined, {
                latitude: center[1],
                longitude: center[0], 
                location: place_name
            })
        }
    })
}

const name = () => {

}
module.exports = geocode