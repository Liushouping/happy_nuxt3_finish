<template>
	<div class="bg-[#fef6e4] w-full h-full lg:h-screen pb-12">
		<Header />
		<Banner />
	</div>

	<div class="bg-[#f3d2c1] w-full h-full flex flex-col items-center pb-24">
		<div class="flex flex-col justify-center items-center py-12" data-aos="fade-up">
			<h5 class="text-[#001858] text-[48px] font-bold">Lorem Ipsum</h5>
			<p class="text-[#001858] text-[16px] w-[90%] lg:w-[40%] text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
		</div>
		<div class="w-[90%] grid grid-cols-1 sm:grid-cols-2 gap-10">
			<div v-for="(i,index) in 8" data-aos="fade-up" :data-aos-delay="index * 300" class="p-10 bg-[#fef6e4]">
				<div class="flex flex-row space-x-4 pb-6">
					<img src="@/assets/image/undraw_blog_post.svg" class="w-12 h-12">
					<h5 class="text-[#001858] text-[32px] font-Anton">Lorem</h5>
				</div>
				<div>
					<p class="text-[#001858] text-[16px] leading-[2rem]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
				</div>
			</div>
		</div>
	</div>

	<div class="relative bg-[#fef6e4] w-full h-full flex flex-col justify-start items-center">
		<div class="w-[90%] flex flex-col lg:flex-row">
			<div class="w-full lg:w-1/2 py-24 px-6">
				<div class="sticky top-12"  data-aos="fade-right">
					<h5 class="text-[#001858] text-[48px] font-Anton">Lorem Ipsum</h5>
					<p class="text-[#001858] text-[16px] leading-[2rem]">ELorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
				</div>
			</div>
			<div class="w-full lg:w-1/2 flex flex-col space-y-6 py-24">
				<div v-for="(i,index) in 8" data-aos="fade-up" :data-aos-delay="index * 300" class="p-10 bg-[#001858]">
					<div class="flex flex-row space-x-4 pb-6">
						<h5 class="text-white text-[32px] font-Anton">Lorem</h5>
					</div>
					<div>
						<p class="text-white text-[16px] leading-[2rem]">HLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="bg-[#f3d2c1] w-full h-full flex flex-col justify-center items-center">
		<Footer />
	</div>
</template>