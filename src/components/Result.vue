<script type="text/javascript">
	import { SearchService } from '../services/search.service'
	import Item from './Item.vue'

	export default {
		components: {
			Item
		},
		data() {
			return {
				searchService: new SearchService(),
				results: [],
				isLoading: true
			}
		},
		methods: {
			
		},
		created() {
			this.searchService
				.query()
				.subscribe(res => {
					this.results = res.data;
					this.isLoading = false;
				});
		},
		mounted() {
			this.searchService.windowScroll()
				.do(() => this.isLoading = true)
				.map((page) => this.searchService.query(page))
				.switch()
				.subscribe((res) => {
					this.results = [...this.results, ...res.data]
					this.isLoading = false
				})
		}
	}
</script>
<template>
	<section class="list-container">
    <ul class="list-ul">
    	<item v-for="(result, key) in results" :result="result" :key="`result${key}`"></item>
    </ul>
    <div class="loading" v-if="isLoading">
    	<span>loading...</span>
    </div>
  </section>
</template>
<style type="text/css">
	.loading {
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		text-align: center;
		background-color: rgba(0, 0, 0, .3);
	}
	.loading span {
		color: #fff;
		background-color: rgba(255, 255, 255, .5);
		display: inline-block;
		width: 100%;
		line-height: 50px;
		position: absolute;
		top: 50%;
		left: 0;
		margin-top: -25px;
	}
</style>