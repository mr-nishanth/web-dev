<template>
    <div>
        <button @click="handleIncrement">Increment</button>
    <p>
      {{ count }}
    </p>
    <button @click="handleDecrement">Decrement</button>
    </div>
</template>

<script setup>
  let count = ref(0)
  const handleIncrement = () =>{
    count.value++
  }
  const handleDecrement = () =>{
    count.value--
  }
  </script>
