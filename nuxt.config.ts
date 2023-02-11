// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	css: [
		'@/assets/css/main.css',
		'animate.css/animate.min.css'
	],
	postcss: {
	    plugins: {
	      tailwindcss: {},
	      autoprefixer: {},
	    },
	},
	app: {
	    head: {
		    charset: 'utf-16',
		    viewport: 'width=device-width, initial-scale=1.0',
		    title: 'Web',
		    meta: [
		        // <meta name="description" content="My amazing site">
		        { name: 'description', content: 'My amazing site.' }
		 	],
		 	link: [
			    { rel: 'icon', type: 'image/png', href: '/' }
			],
		},
	    // pageTransition: {
	    //  	name: 'rotate',
	    //  	mode: 'out-in' // default
	    // },
	},
	plugins: [{ src: "@/plugins/aos", ssr: false, mode: "client" }],
})
