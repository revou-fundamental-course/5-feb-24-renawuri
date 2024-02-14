function convert(type) {
    if (type === 'celsius') {
        var celsius = parseFloat(document.getElementById('inputCelsius').value);
        var fahrenheit = (celsius * 9/5) + 32;
        document.getElementById('inputFahrenheit').value = isNaN(fahrenheit) ? '' : fahrenheit;
        document.getElementById('resultTitle').innerText = 'Hasil Konversi:';
        document.getElementById('resultContent').innerHTML = celsius + ' Celsius = ' + fahrenheit + ' Fahrenheit. <br><span class="calculation-info">Cara perhitungan: (' + celsius + ' °C × 9/5) + 32 = ' + fahrenheit + ' °F</span>';
    } else if (type === 'fahrenheit') {
        var fahrenheit = parseFloat(document.getElementById('inputFahrenheit').value);
        var celsius = (fahrenheit - 32) * 5/9;
        document.getElementById('inputCelsius').value = isNaN(celsius) ? '' : celsius;
        document.getElementById('resultTitle').innerText = 'Hasil Konversi:';
        document.getElementById('resultContent').innerHTML = fahrenheit + ' Fahrenheit = ' + celsius + ' Celsius. <br><span class="calculation-info">Cara perhitungan: (' + fahrenheit + ' °F - 32) × 5/9 = ' + celsius + ' °C</span>';
    }
}

function clearFields() {
    document.getElementById('inputCelsius').value = '';
    document.getElementById('inputFahrenheit').value = '';
    document.getElementById('resultTitle').innerText = '';
    document.getElementById('resultContent').innerHTML = '';
}
