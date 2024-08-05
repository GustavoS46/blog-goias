<template>
    <div class="relative h-screen max-h-[700px] bg-[url('../img/image-3.jpg')] bg-cover bg-center flex items-center justify-center">
        <!-- Sobreposição com Conteúdo -->
        <div class="absolute inset-0 bg-black/50 flex items-center justify-center">
            <!-- Contêiner Centralizado -->
            <div class="container mx-auto p-8 rounded-lg shadow-lg flex items-center gap-8">
                <!-- Texto -->
                <div class="flex flex-col items-start w-1/2 pr-8">
                    <h5 class="text-white text-4xl mb-6">
                        Goiânia: Capital Verde do Brasil
                    </h5>
                    <p class="text-white text-xl">
                        Capital do Estado de Goiás, Goiânia figura entre as cidades com melhor índice de qualidade de vida do
                        país. É o município brasileiro com maior área verde por habitante (94 m²) e detentor do segundo maior
                        quantitativo proporcional do mundo.
                    </p>
                </div>

                <!-- Imagem -->
                <img class="w-1/2 h-auto object-cover rounded-lg" src="../img/image-4.jpeg" alt="Vista aérea de Goiânia" />
            </div>
        </div>
    </div>
</template>

<script setup>
// Se necessário, adicione imports aqui
</script>

<style scoped>
/* Se necessário, adicione estilos específicos aqui */
</style>
