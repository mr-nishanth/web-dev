<template>
  <div>
    
    <!-- <a @click="view('home')">Home</a> <br>
    <a @click="view('counter')">Counter</a> -->

    <!-- <NuxtPage /> -->


    <!-- <br> -->
    <!-- <button @click="toggle">Toggle</button>     -->

    <!-- Dynamic Import -->
    <!-- <LazyHomeWelcome v-if="page === 'home'"/>   -->
    <!-- <LazyCounter v-if="page === 'counter'" /> -->

    <!-- <component :is="MyComponent" /> -->    
    
    <header>
    <nav>
      <ul>
        <li><NuxtLink to="/about">About</NuxtLink></li>
        <li><NuxtLink to="/posts/1">Post 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">Post 2</NuxtLink></li>
      </ul>
    </nav>
  </header>

</div>
</template>

<!-- Dynamic component -->
<script setup>

const page = ref("home")
const view = (componentName) =>{
  page.value = componentName
}
  
</script>

