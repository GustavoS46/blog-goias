<template>
    <div class="container mx-auto bg-[#E1E5E7]">
        <div class="z-10">
            <HeaderComponent />
        </div>
        <div class="bg-cover bg-center relative items-center mx-auto">
            <img src="../img/image-1.webp" alt="Parque de Goiânia">
            <div class="absolute inset-0 flex flex-col items-center justify-center">
                <h4 class="text-white text-5xl mb-6">
                    Cidade Arborizada do Mundo
                </h4>
                <p class="text-white text-xl">
                    Goiânia tem 1 milhão de árvores em seus 32 bosques e parques
                </p>
            </div>
        </div>
    </div>

</template>

<script setup>
import HeaderComponent from "./HeaderComponent.vue";
</script>
