<template>
    <div>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="about">About</NuxtLink>
            <NuxtLink to="profile">Profile</NuxtLink>
        </nav>
<!-- Here nuxt will replace page content -->
      <slot />
    </div>
  </template>
  