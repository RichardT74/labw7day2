import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
	new Vue({
		el: '#app',
		data: {
			countries: [],
			filter: []
		},
		mounted(){
			this.fetchPopulation()
		},
		computed: {
			totalPopulation: function () {
				return this.countries.reduce((sum, country) => {
					return sum + country.population;
				}, 0);
			}

			},
			methods: {
			fetchPopulation: function(){
				const request = fetch("https://restcountries.eu/rest/v2/all")
				.then(response => response.json())
				.then(data => this.countries = data)
			},


		}

	})

})
