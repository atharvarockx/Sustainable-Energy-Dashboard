fetch('Electricity/electricity.html')
.then(response => response.text())
.then(data => {
    document.getElementById('electricity-data').innerHTML = data;
});
fetch('cooking/cooking.html')
.then(response => response.text())
.then(data => {
    document.getElementById('cooking-data').innerHTML = data;
});