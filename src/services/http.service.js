import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource);

export class HttpService {
	constructor() {
		
	}

	get(api, params = {}) {
		return Vue.http.get(api, params)

	}
}