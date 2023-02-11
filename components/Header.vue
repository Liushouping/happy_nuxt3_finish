<script>
export default {
	setup(){
		// function scrollFunction() {
		// 	let navbar = document.getElementById("header");
		// 		if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
		// 		    navbar.style = "background:#ff5500;";
		// 		} else {
		// 		    navbar.style = "";
		// 	}
		// };

		// onMounted(() => {
	    //     window.addEventListener('scroll', scrollFunction, true);
	    // });

		return {
			// scrollFunction,
		};
	}
}
</script>
<template>
	<div 
	class="relative w-full duration-300">
		<div class="w-[90%] h-[120px] mx-auto flex flex-row justify-between items-center">
		<div class="h-full flex justify-center items-center">
			<NuxtLink 
			to="/" 
			class="w-full flex justify-center items-center text-[24px] text-[#001858] font-Anton antialiased"
			data-aos="fade-right">
		        happy-app
		    </NuxtLink>
		</div>
		<div class="h-full flex flex-row space-x-8 items-center justify-center tracking-[1px]">
			<NuxtLink 
		    to="/" 
		    class="w-full flex justify-center items-center text-[16px] text-[#001858] font-Anton antialiased"
		    data-aos="fade-left">
		        Toggle B
		    </NuxtLink>
		    <NuxtLink 
		    to="/" 
		    class="w-full flex justify-center items-center text-[16px] text-[#001858] font-Anton antialiased"
		    data-aos="fade-left">
		        Toggle B
		    </NuxtLink>
		</div>

	    </div>
	</div>
</template>