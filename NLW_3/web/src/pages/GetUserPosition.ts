
export default function GetUserPosition() {
    navigator.geolocation.getCurrentPosition((position:any) => {
        localStorage.setItem('latitude', position.coords.latitude);
        localStorage.setItem('longitude', position.coords.longitude); 
    }, (err) => {
        alert("A aplicação Precisa acessar seu geolocalização, por favor permita");
    });

  const latitude = localStorage.getItem('latitude');
  const longitude = localStorage.getItem('longitude');


 fetch(`https://revgeocode.search.hereapi.com/v1/revgeocode?at=${latitude},${longitude}&resultType=address&lang=pt-BR&apiKey=-NZJhcmyzw4P3WyhKXF8JMxTBEi6eUaCQ0nNc5pNHGk`).then( async (response)=>{

    const positionUser = await response.json()
    const getAddressUser = positionUser.items[0];
    localStorage.setItem('city' , getAddressUser.address.city)
    localStorage.setItem('state' , getAddressUser.address.state)
   
})
return { latitude, longitude}
}