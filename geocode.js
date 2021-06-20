
const axios = require('axios');
module.exports = async function getGeocode(req) {
    //res.send("address1");
    var address1 = req.query.address1;
    var address2= req.query.address2;
    var city = req.query.city;
    var state = req.query.state;
    var zip = req.query.zip;

    var address = address1+"+"+address2+"+"+city+"+"+state+"+"+zip;

    var locationName = address.split(' ').join('+');
    const bingUrl="http://dev.virtualearth.net/REST/v1/Locations/"
    const bingKey = "?o=json&key=Alm1TpgnTXpo9oHxU5-G-6OcyvHEsyxU9Fg19LUf-J3PU4buCN_pErjgvvxRQhNP"
    let addressResult = ''
     addressResult = await axios.get(bingUrl+locationName+bingKey).then((resp) => {
    if(resp.data.statusCode  !== 200) {
        var address = city+"+"+state+"+"+zip;
        var locationName = address.split(' ').join('+');
        axios.get(bingUrl+locationName+bingKey).then((resp) => {
            if(body.statusCode  !== 200) {
                var address = state+"+"+zip;
                var locationName = address.split(' ').join('+');
                axios.get(bingUrl+locationName+bingKey).then((resp) => {
                    if(body.statusCode  !== 200 && zip !== '') {
                        var address = city+zip
                        var locationName = address.split(' ').join('+');
                        axios.get(bingUrl+locationName+bingKey).then((resp) => {
                            if(body.statusCode  !== 200) {
                                throw error
                            } else {
                                 return res.send({data:res.data.resourceSets})
                            }
                            })
                    } else { 
                        return res.send({data:res.data.resourceSets})
                    }
                    })
            } else { 								
                return res.send({data:res.data.resourceSets})
            }
            })
    } else { 
        const addressResult = resp.data.resourceSets[0].resources[0].geocodePoints[0]
        // addressResult = resp.data
        return resp.data
        // res.send({data:resp.data})
    }
    }).catch(err => console.log(err))
    //const bingUrl="http://dev.virtualearth.net/REST/v1/Locations/delhi%20india?o=json&key=Alm1TpgnTXpo9oHxU5-G-6OcyvHEsyxU9Fg19LUf-J3PU4buCN_pErjgvvxRQhNP";
return  addressResult
}