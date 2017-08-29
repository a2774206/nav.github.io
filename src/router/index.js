import Vue from 'vue'
import Router from 'vue-router'
import Tory from '@/components/directory'
import Zujian from '@/components/ComponentA'
import source from '@/components/Resource'
import Focusonus from '@/components/Focusonus'

import znDesign from '@/components/info/design'
import aboutbj from '@/components/info/aboutbj'
import aboutus from '@/components/info/aboutus'
import joinus from '@/components/info/joinus'
import helpcenter from '@/components/help/helpcenter'
import linkus from '@/components/help/linkus'
import advert from '@/components/cooperation/advert'
import applications from '@/components/cooperation/applications'
import unit from '@/components/cooperation/unit'
import contactus from '@/components/Concernus/contactus'
import feedback from '@/components/Concernus/feedback'
import webmap from '@/components/Concernus/webmap'
Vue.use(Router)
export default new Router({
	routes: [{
			path: '/', //默认
			name: 'tory',
			component: Tory,
			redirect: 'directory/design',
			//默认跳转
		},
		{
			path: '/directory', //指南
			component: Tory,
			children: [ //指南->免责声明
				{
					path: '',
					component: znDesign
				},
				{
					path: '/directory/design',
					name: 'design',
					component: znDesign
				},
				{
					path: '/directory/aboutbj',
					name: 'aboutbj',
					component: aboutbj
				},
				{
					path: '/directory/aboutus',
					name: 'aboutus',
					component: aboutus
				},
				{
					path: '/directory/joinus',
					name: 'joinus',
					component: joinus
				},
			]
		},
		{
			path: '/ComponentA', //组件
			component: Zujian,
			children: [{
					path: '',
					component: helpcenter
				},
				{
					path: '/ComponentA/helpcenter',
					name: 'helpcenter',
					component: helpcenter
				},
				{
					path: '/ComponentA/linkus',
					name: 'linkus',
					component: linkus
				}
			]
		},
		{
			path: '/Resource', //资源
			component: source,
			children: [
				{
					path: '',
					component: advert
				},
				{
					path: '/Resource/advert',
					name: 'advert',
					component: advert
				},
				{
					path: '/Resource/applications',
					name: 'applications',
					component: applications
				},
				{
					path: '/Resource/unit',
					name: 'unit',
					component: unit
				}
			]
		},
		{
			path: '/Focusonus', 
			component: Focusonus,
			children: [
				{
					path: '',
					component: contactus
				},
				{
					path: '/Focusonus/contactus',
					name: 'contactus',
					component: contactus
				},
				{
					path: '/Focusonus/feedback',
					name: 'feedback',
					component: feedback
				},
				{
					path: '/Focusonus/webmap',
					name: 'webmap',
					component: webmap
				}
			]
		}

	]
})