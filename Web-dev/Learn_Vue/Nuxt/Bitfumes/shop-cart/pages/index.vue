<template>
    <div>

    <h1>Home Page by Nishanth</h1>
    <button @click="moveToAbout">Take me to About Page</button>
    </div>
</template>

<script setup>
 function moveToAbout() {
    navigateTo("about")
 }
</script>