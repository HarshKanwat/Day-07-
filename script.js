var request = new XMLHttpRequest();
request.open("get","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var result = JSON.parse(request.response);
    console.log(result);

    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        const asianCountries = countries.filter(country => country.region === 'Asia');
        console.log('Asian Countries:', asianCountries);
    });


    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        const smallPopulationCountries = countries.filter(country => country.population < 200000);
        console.log('Countries with Population < 200,000:', smallPopulationCountries);
    });


    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        countries.forEach(country => {
            const name = country.name.common;
            const capital = country.capital ? country.capital[0] : 'Unknown';
            const flag = country.flags.svg;
            console.log(`Name: ${name}, Capital: ${capital}, Flag: ${flag}`);
        });
    });


    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        const totalPopulation = countries.reduce((sum, country) => sum + country.population, 0);
        console.log('Total Population:', totalPopulation);
    });


    fetch('https://restcountries.com/v3.1/all')
    .then(response => response.json())
    .then(countries => {
        const usdCountries = countries.filter(country => country.currencies && country.currencies.USD);
        console.log('Countries using US Dollars:', usdCountries);
    });
  }