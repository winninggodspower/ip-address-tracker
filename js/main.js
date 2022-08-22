const ipifyApikey = 'at_JBDtkos51sNFQoWlydnrbnv5UxIFq';
const ipifyUrl = 'https://geo.ipify.org/api/v2/country?apiKey=at_JBDtkos51sNFQoWlydnrbnv5UxIFq';


 const GetIpData = async (param = '')=>{
    await $.ajax({
        url: ipifyUrl + param, 
        method: 'GET',

        success: function (data) {
            $('#ipadress').text(data.ip)
            $('#location').text(data.location.country + ',' + data.location.region)
            $('#timezone').text(data.location.timezone)
            $('#ISP').text(data.isp)
        },

        error: function(data){
            console.log(data.responseText);
            alert(data.responseJSON.messages)
        }
    })
}

$(document).ready(()=>{

    GetIpData()

})


$('#search-form').on('submit', (e)=>{
    e.preventDefault()
    let ipadress = $('#ipadressInput').val()
    GetIpData(param = `&ipAddress=${ipadress}`)
    requestLocation(ipadress)
    console.log(ipadress);
})

const requestLocation = (ipadress)=>{
    $.ajax({
        url: `https://ipapi.co/${ipadress}/json/`,
        method: 'GET',
        success: function(data) {
            setLocation(data.latitude, data.longitude)
        }
    })
}