<template>
	<div class="resource">
		<div class="page-container-l">
			<ul class="ul-list"> 
				<li class="nav-item">
					<router-link to="../Focusonus/contactus" exact>联系我们</router-link>
				</li>
				<li class="nav-item">
					<router-link to="../Focusonus/feedback">意见反馈</router-link>
				</li>
				<li class="nav-item">
					<router-link to="../Focusonus/webmap">网站地图</router-link>
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
		name: 'Focusonus',
		data() {
			return {}
		},
		methods: {

		}
	}
</script>

<style>
	.page-container-l{
		float: left;
	}
</style>