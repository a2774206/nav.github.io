<template>
	<div class="resource">
		<div class="page-container-l">
			<ul class="ul-list"> 
				<li class="nav-item">
					<router-link to="../ComponentA/helpcenter" exact>帮助中心</router-link>
				</li>
				<li class="nav-item" @click="a">
					<router-link to="../ComponentA/linkus" >友情链接</router-link>
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
		name: 'tory',
		data() {
			return {
			}
		},
		methods: {
			a:function(){
				alert(1)
			}
		}
	}
</script>

<style>
</style>