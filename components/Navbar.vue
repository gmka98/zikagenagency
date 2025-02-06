

<template>
    <nav class="mt-2  xl:max-w-screen-lg mx-auto ">
        <div class="flex justify-between items-center ">
            <div class="flex items-center gap-1">
                <img src="~/assets/logo.png" class="h-9"/>
                <h1 class="capitalize text-2xl font-bold">Zikangen agency
                </h1>
            </div>
            
            <div>
                <ul class="flex gap-10 font-semibold">
                    <li>
                        <NuxtLink to="/">Accueil</NuxtLink>
                    </li>
                    .
                    <li class="capitalize">
                        <NuxtLink to="/a-propos">à propos</NuxtLink>
                    </li>
                    .
                    <li>
                        <NuxtLink to="/conseils">Conseils</NuxtLink>
                    </li>
                    .
                    <li>
                        <NuxtLink to="/services">Services</NuxtLink>
                    </li>
                    .
                    <li>
                        <NuxtLink to="/contact">Contact</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
        
    </nav>
</template>
<script setup lang="ts">

</script>