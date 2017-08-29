<template>
	<div class="design">
		<h2>免责声明</h2>
		<ul class="sj">
			<div class="b_box_con">

        	<dl>

            	<dt>欢迎访问北京信息网！在您开始查询和发布信息之前，请先阅读以下信息。</dt>

            </dl>

            <dl>

            	<dt><strong>特别提示：</strong></dt>

                <dd>1、您一旦注册成功后，北京信息网将给予您一个用户帐号及相应的密码，该用户帐号和密码由您自己负责保管；您应当对以其用户帐号进行的所有活动和事件负法律责任。</dd>

                <dd>2、用户可以在北京信息网（<a href="http://www.bjxxw.com" target="_blank"><font color="#000099">http://www.bjxxw.com</font></a>）免费发布和搜索各类信息。</dd>

                <dd>3、北京信息网一如既往地坚持我们的宗旨：构建北京网络数字化综合服务平台，打造北京网络信息服务品牌。竭诚为北京广大市民服务，诚信服务消费者、确保信息的健康、真实等为己任！加强对广告、卖药、枪支、宗教、政治、色情、赌博等违法信息的监控，让网站内容更加健康，接到投诉100%及时快速解决。</dd>

            </dl>

            <dl>

            	<dt><strong>使用规则：</strong></dt>

                <dd>1、用户在申请使用北京信息网网络服务时，必须向北京信息网提供准确的个人资料，如个人资料有任何变动，必须及时更新。</dd> 

				<dd>2、用户不应将其帐号、密码转让或出借予他人使用。如用户发现其帐号遭他人非法使用，应立即通知北京信息网。因黑客行为或用户的保管疏忽导致帐号、密码遭他人非法使用，北京信息网不承担任何责任。</dd>

                <dd>3、对于用户通过北京信息网网络服务上传到北京信息网上可公开获取区域的任何内容，用户同意北京信息网在全世界范围内具有免费的、永久性的、不可撤销的、非独家的和完全再许可的权利和许可。</dd>

                <dd>4、用户在使用北京信息网网络服务过程中，必须遵循以下原则：</dd>

                <dd>&nbsp;&nbsp;&nbsp;1)、遵守中国有关的法律和法规；</dd>

                <dd>&nbsp;&nbsp;&nbsp;2)、遵守所有与网络服务有关的网络协议、规定和程序；</dd>

                <dd>&nbsp;&nbsp;&nbsp;3)、不得为任何非法目的而使用网络服务系统；</dd>

                <dd>&nbsp;&nbsp;&nbsp;4)、不得利用北京信息网网络服务系统进行任何可能对互联网或移动网正常运转造成不利影响的行为；</dd>

                <dd>&nbsp;&nbsp;&nbsp;5)、不得利用北京信息网提供的网络服务上传、展示或传播任何虚假的、骚扰性的、中伤他人的、辱骂性的、恐吓性的、庸俗淫秽的或其他任何非法的信息资料；</dd>

                <dd>&nbsp;&nbsp;&nbsp;6)、不得侵犯其他任何第三方的专利权、著作权、商标权、名誉权或其他任何合法权益；</dd>

                <dd>&nbsp;&nbsp;&nbsp;7)、不得利用北京信息网网络服务系统进行任何不利于北京信息网的行为；</dd>

                <dd>&nbsp;&nbsp;&nbsp;8)、如发现任何非法使用用户帐号或帐号出现安全漏洞的情况，应立即通告北京信息网。如用户在使用北京信息网网络服务时违反任何上述规定，北京信息网或其授权的人有权要求用户改正或直接采取一切必要的措施（包括但不限于更改或撤消用户张贴的内容等、暂停或终止用户使用网络服务的权利）以减轻用户不当行为造成的影响。您只有无条件接受以上所有服务条款，才能继续申请。</dd>

            </dl>

        </div>
		</ul>
		
	</div>
</template>

<script>
	export default {
		name: 'design',
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	.design h3{
	font-size: 22px;
    font-weight: 400;
    margin: 0 0 30px;
    color: #1f2d3d;
	}
	.design li{
	font-size: 14px;
    margin-bottom: 10px;
    color: #99a9bf;
    list-style: none;
    float: none;
    width: 100%;
	}
	.design strong{
	 	color: #5e6d82;
	 }
	 .sj{
	 	display: flex;
	 	display: -webkit-flex;
	 	justify-content: center;
	 	flex-direction: row;
	 	margin: 0px 0;
	 	    
	 }
	 .sj li{
	 	width: 80px;
	 	text-align: center;
	 	flex: 1;
	 	margin: 55px 0;
	 }
	 .sj li img{
	 	width: 80px;
	 	height: 80px;
	 }
	 .design_list  ul{
	 	margin-bottom: 40px;
	 }
	 .sj dt,.sj dd{
	 	margin: 15px 0;
	 	line-height: 30px;
	 }
</style>