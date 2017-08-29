<template>
	<div class="resource">
		<div class="page-container-l">
			<ul class="ul-list"> 
				<li class="nav-item">
					<router-link to="../resource/advert" exact>广告服务</router-link>
				</li>
				<li class="nav-item">
					<router-link to="../resource/unit">合作单位</router-link>
				</li>
				<li class="nav-item">
					<router-link to="../resource/applications">申请表</router-link>
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
		name: 'Resource',
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