<script setup>
    import Formulario from './components/Formulario.vue'
    import Clima from './components/Clima.vue';
    import Spinner from './components/Spinner.vue';
    import useClima from './composables/useClima';
    const { obtenerClima,clima,mostrarClima,cargando } = useClima();
</script>

<template>
    <h1 class="titulo">Buscador de clima</h1>
    <div class="contenedor buscador-clima">
        <Formulario 
            @obtener-climna="obtenerClima"
        />
        <Spinner v-if="cargando"/>
        <clima
        v-if="mostrarClima"
        :clima="clima"
        />
    </div>
    
</template>