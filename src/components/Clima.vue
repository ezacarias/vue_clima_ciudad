<script setup>
const emit = defineEmits(['clima']);
</script>

<template>
    <div class="resultado">
        <h1>Clima de: </h1>
        <p class="actual"></p>
        <div class="temperaturas">
            <p>Min: <span>&deg;C</span></p>
            <p>Max: <span>&deg;C</span></p>

        </div>
    </div>
</template>



