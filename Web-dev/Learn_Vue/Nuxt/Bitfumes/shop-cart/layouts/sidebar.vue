<template>
    <aside class="sidebar">
        <p>Dashboard</p>
        <p>Settings</p>

        <main>
            <slot />
        </main>
    </aside>    
</template>

<style scoped>
.sidebar{
    display: flex;
    flex-direction: column;
}
</style>

