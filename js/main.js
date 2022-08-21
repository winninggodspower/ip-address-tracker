const ipifyApikey = 'at_JBDtkos51sNFQoWlydnrbnv5UxIFq';
const ipifyUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_JBDtkos51sNFQoWlydnrbnv5UxIFq';

$(document).ready(()=>{

    GetIpData()

})


 const GetIpData = async (param = '')=>{
    await $.get(ipifyUrl + param, function (data) {
        console.log(data);
        $('#ipadress').text(data.ip)
        $('#location').text(data.location.country + ',' + data.location.region)
        $('#timezone').text(data.location.timezone)
        $('#ISP').text(data.isp)

    })
}