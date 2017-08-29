<template>
  <div id="app">
	  <div class="header">
			<div class="container">
				<h1>
					<a href="http://www.bjxxw.com">
						<img src="./assets/4.png" style=" vertical-align: middle"  >
					</a>
				</h1>
				<ul class="nav">
					<li v-for="(i,item) in act" v-on:click="active(item)" :item="item">
						<!--<a href="javascript:void(0)" :class="{ 'bold': item == index }" >{{i}}</a>-->
						<router-link :to="'../'+luyou[item]" :class="{ 'bold': item == index }">
							{{i}}
						</router-link>
						
					</li>
				</ul>
			</div>
		</div>
		<!--head_end-->
		
		<!--内容开始-->
		<div class="container_center">
			<router-view>
			
			</router-view>
		</div>
		<!--内容结束-->
		
		<!--bottom-->
		<div class="footer">
			Copyright © 北京信息网版权所有 
		</div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      ImageUrl: 'src/assets/4.png',
      act:['公司信息','用户帮助','商务合作','关注我们'],
      luyou:['directory/design','ComponentA/helpcenter','resource/advert','Focusonus/contactus'],
      index:0
    }
  },
  methods:{
  	active:function(item) {
  		//导航样式切换
  		this.bold=!this.bold;
  		this.index=item;
		}
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:left;
  color: #2c3e50;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.bold{
	font-weight: bold;
	display: inline-block;
}
.header{
	background: #20a0ff;
	height: 80px;
	line-height: 80px;

}
.container{
	  width: 1140px;
    padding: 0 30px;
    margin: 0 auto;
   
}
.container h1{
	float: left;
}
.container a img{
	vertical-align: sub;
}
.nav{
	float: right;
}
.nav li{
	
	position: relative;
	text-align: center;
	width: 105px;
}
.nav li a{
	color: #ffffff;
	text-decoration: none;
	opacity: 0.9;
	display: inline-block;
	width: 100%;
	height: 100%;
}
.nav li .bold::before{
	position: absolute;
	content: " ";
	display: inline-block;
	width: 100%;
	height: 3px;
	background: #99d2fc;
	left: 0;
	bottom: 0;
}
.nav li a:hover{
	opacity: 1;
}
.nav li a{
	display: inline-block;
	width: 100%;
	height: 100%;
}
.footer{
	text-align: center;
	color: #fff;
	background: #324057;
	height: 80px;
	line-height: 80px;

	
}






.container_center .router-link-active{
	color: #20A0FF;
}
h2:first-child{
	margin-bottom: 20px;
}
.resource{
	padding: 55px 30px 20px;
	width: 1140px;
	margin: 0 auto;
	 overflow: hidden;
}
.page-container-l{
		float: left;
		width: 194px;
		overflow: hidden;
}
.page-container-r{
	float: right;
	width: calc(1140px - 194px);
}
.ul-list li a{
	color: #000;
	text-decoration: none;
}
.ul-list li{
	font-size: 16px;
	float: none;
	width: 100%;
	line-height: 30px;
	height: 30px;
	margin: 5px 0;
}
</style>
