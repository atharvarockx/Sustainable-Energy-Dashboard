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
fetch('Renewable-Energy/renewable-energy-share.html')
.then(response => response.text())
.then(data => {
    document.getElementById('renewable-energy-share').innerHTML = data;
});

//handling tabs:
// function openContent(evt, idname) {
//     var all_sections = document.getElementsByTagName("section");
//     console.log(all_sections);
//     console.log(idname);
//     var section_to_open = document.getElementById(idname);
//     console.log(section_to_open);
//     for (var i = 0; i < all_sections.length; i++){
//         all_sections[i].style.display = 'none';
//     }
//     section_to_open.style.display = 'block';
//     var header = document.getElementById("header");
//     // header.style.display = 'block';//always show header;

//   }