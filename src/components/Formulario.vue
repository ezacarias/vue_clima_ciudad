<script setup>
import {} from '../../public/style.css';
const paises = [
    { codigo: 'US', nombre: 'Estados Unidos' },
    { codigo: 'MX', nombre: 'México' },
    { codigo: 'AR', nombre: 'Argentina' },
    { codigo: 'CO', nombre: 'Colombia' },
    { codigo: 'CR', nombre: 'Costa Rica' },
    { codigo: 'ES', nombre: 'España' },
    { codigo: 'PE', nombre: 'Perú' }
]
</script>

<template>
    <form
    class="formulario"
    >
    <div class="campo">
        <label for="ciudad">Ciudad</label>
        <input 
        type="text" 
        name="ciudad" 
        placeholder="ciudad"
        />
    </div>

    <div class="campo">
        <label for="pais">País</label>
        <select 
        id="pais"
        >
            <option value="">--Seleccione--</option>
            <option v-for="pais in paises" :value="pais.codigo">{{ pais.nombre }}</option>
        </select>
    </div>

    <input 
    type="submit" 
    value="Consultar clima"
    />

    </form>
</template>