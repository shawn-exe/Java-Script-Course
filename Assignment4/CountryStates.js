function getstates() {
    const country = document.getElementById("country").value;
    const stateDropdown = document.getElementById("state");
    
    stateDropdown.innerHTML = '<option value="">state</option>';

    if (country) {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "countries.xml");

        xhr.onload = function() {
          
                const xml = xhr.responseXML;
                const countries = xml.getElementsByTagName("country");

                for (let i = 0; i < countries.length; i++) {
                    if (countries[i].getAttribute("name") === country) {
                        const states = countries[i].getElementsByTagName("state");

                        for (let j = 0; j < states.length; j++) {
                            const stateName = states[j].textContent;
                            const option = document.createElement("option");
                            option.value = stateName;
                            option.text = stateName;
                            stateDropdown.add(option);
                        }
                        break;  
                    }
                }
        };

        xhr.send();
    }
}
function showres() {
    const countrySelect = document.getElementById('country');
    const stateSelect = document.getElementById('state');

    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    const selectedState = stateSelect.options[stateSelect.selectedIndex].text;

    document.getElementById('c').textContent=`Selected Country: ${selectedCountry}`;
    document.getElementById('s').textContent=`Selected State: ${selectedState}`;
}