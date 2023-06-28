# What is NuxtJs ?

- Nuxt is a framework of Vuejs
- It is the framework of framework (meta-framework)
- Extendable with a strong module ecosystem and hooks engine
- It supports TypeScript out of the box for better performance and speed
- PWA and AMP support is only a module away form your Nuxt project
- It makes it easy to connect your REST API and GraphQL API endpoint

# Why use NuxtJs ?

- Nuxt uses both [webpack5] and [Vite] - for got module replacement in development and bundle your code for production
- Nuxt uses [esbuild] - A transpiler to write the latest JavaScript syntax while supporting legacy browsers
- Nuxt uses [h3]{http module} for deployment such as serverless , workers,Nodejs and unmatched performance
- A routing library to handle client-side navigation we choose vue-router
- Nuxt has its own Command line interface : [nuxi]
- For proper deployment on various platforms,Nuxt uses a Server engine: [nitro]
  
# What is Auto Import ?

- Nuxt auto imports helpers functions,composable and Vue APIs to use across your application without explicitly importing them
  ```vue
    <script setup>
        <!-- ref() and computed() are auto imported -->
        const count = ref(1);
        const double = computed (()=> count.value * 2);
    </script>
  ```

## Components Directory

### Nuxt Support Kebab case and Pascal case
```
    <home-welcome/>
    <HomeWelcome/>
```

### Dynamic Components
- If you want to use the Vue <component :is="someComputedComponent"> syntax, then you will need to use the resolveComponent helper provided by Vue.

```vue

<template>
  <component :is="clickable ? MyButton : 'div'" />
</template>

<script setup>
const MyButton = resolveComponent('MyButton')
</script>

```

```vue

Way 1

<template>
  <div>
    <button @click="toggle">Toggle</button>
    <component :is="MyComponent" />
  </div>
</template>

<!-- Dynamic component -->
<script setup>

const toggle = () =>{
  MyComponent.value = resolveComponent("HomeWelcome")
}
  const MyComponent = shallowRef(resolveComponent("Counter"))
</script>

-------------------------------------------------------------------------------
 Way 2

<template>
  <div>
    
    <button @click="toggle">Toggle</button>
    <div v-if="MyComponent === 'welcome'">
      <HomeWelcome/>
    </div>
    <Counter v-else/>

    <!-- <component :is="MyComponent" /> -->
  </div>
</template>

<!-- Dynamic component -->
<script setup>

const MyComponent = ref("counter")

const toggle = () =>{
  MyComponent.value = "welcome"
}
  
</script>



```

### Dynamic Imports
- To dynamically import a component (also known as lazy-loading a component) all you need to do is add the Lazy prefix to the component's name.

```vue

<template>
  <div>
    <TheHeader />
    <slot />
    <LazyTheFooter />
  </div>
</template>

```

```vue

<template>
  <div>
    
    <a @click="view('home')">Home</a> <br>
    <a @click="view('counter')">Counter</a>

    <br>
    <!-- Dynamic Import -->
    <LazyHomeWelcome v-if="page === 'home'"/>  
    <LazyCounter v-if="page === 'counter'" />

  </div>
</template>

<!-- Dynamic component -->
<script setup>

const page = ref("home")
const view = (componentName) =>{
  page.value = componentName
}
  
</script>

```