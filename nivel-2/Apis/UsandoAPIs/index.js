async function search() {
    const  city = document.getElementById('city').value || 'london';
    const apiKey ="7bc770a8cbd54f3dbd0eb92a1a482898";

    const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}&include=minutely`;

    try {
        const response = await fetch(url);
        const data =  await response.json();

        if (data.data && data.data.length > 0) {
            const clima =data.data[0];
            document.getElementById('result').innerHTML = ` 
            <h3>🌍 ${clima.city_name},${clima.country_code}</h3>
            <p>🌡️ Temp:${clima.temp}</p>
            <p>🌥️ Estado:${clima.weather.description}</p>
            <p>💨 Viento: ${clima.wind_spd} m/s</p>            
          `; 
        }else{
            document.getElementById('result').innerHTML = `<p>Ciudad no encontrada</p>`;
        }


    } catch (error) {
        document.getElementById('result').innerHTML = `<p>Error al obtener los datos</p>`;
        console.error('Error fetching weather data:', error);
    }
}