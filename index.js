/* API CODE */

document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const city = document.getElementById('city').value;
    const apiKey = '86472b41524bc86947cfd6a6a84dda01';
    
    // URL de la API de OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    
    // Hacer la solicitud a la API
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data); // Verifica los datos devueltos por la API en la consola
            
            // Mostrar el resultado en la página
            const weatherResult = document.getElementById('weatherResult');
            weatherResult.innerHTML = `
                <h3>Clima en ${data.name}</h3>
                <p>Temperatura: ${data.main.temp} °C</p>
                <p>Descripción: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Hubo un problema al obtener el clima:', error);
            alert('Hubo un problema al obtener el clima. Por favor intenta nuevamente.');
        });
});
