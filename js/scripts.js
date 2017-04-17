var url = 'https://restcountries.eu/rest/v1/name/',
	countriesList = $('#countries');
	
$('#search').click(searchCountries);

//extractingCountryName
function searchCountries() {
	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
		url: url + countryName,
		method: 'GET',
		success: showCountriesList
	});
};	

//extractingReults
function showCountriesList(resp) {
	countriesList.empty();
	resp.forEach(function(item) {
		$('<li>').text(item.name + ', Capital: ' + item.capital + ', Population: ' + item.population + ', Region: ' + item.region).appendTo(countriesList);
	});
};