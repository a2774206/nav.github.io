<template>
	<div class="resource">
		<div class="page-container-l">
			<ul class="ul-list"> 
				<li class="nav-item">
					<router-link to="../directory/design" exact>免责声明</router-link>
				</li>
				<li class="nav-item">
					<router-link to="../directory/aboutbj">关于北京</router-link>
				</li>
				<li class="nav-item">
					<router-link to="../directory/aboutus">关于我们</router-link>
				</li>
				<li class="nav-item">
					<router-link to="../directory/joinus">诚聘英才</router-link>
				</li>
			</ul>	
		</div>	
		<div class="page-container-r">
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'source',
		data() {
			return {
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	
</style>