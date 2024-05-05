<script setup>
    import useClima from './composables/useClima';
    import Formulario from './components/Formulario.vue'
    import Clima from './components/Clima.vue';
    const { obtenerClima,clima,mostrarClima } = useClima();
</script>

<template>
    <h1 class="titulo">Buscador de clima</h1>
    <div class="contenedor buscador-clima">
        <Formulario 
            @obtener-climna="obtenerClima"
        />
        <clima
        v-if="mostrarClima"
        
        />
    </div>
    
</template>