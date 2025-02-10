<template>
  <section class="mt-10 xl:max-w-screen-lg mx-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 mt-10  items-center">
      <div class="">
        <p class="text-5xl font-serif font-bold">Mettez votre art en 
          lumière avec
        </p>
        <h1 class="text-5xl font-triodion font-serif font-bold">ZIKAGEN AGENCY</h1>
        <blockquote class="mt-4">
          Zikagen est une agence de marketing spécialisé dans le domaine digitale pour
          accompagner les photographe, les vidéastes à augmenter leur visibilité.
          Chez Zikagen, nous transformons votre art en une véritable signature.
        </blockquote>
        <div class="mt-3 flex gap-5">
          <button class="bg-black text-white px-4 py-2 mt-5 rounded-md">En savoir plus</button>
          <button class="bg-white text-black px-4 py-2 mt-5 hover:underline rounded-md">Contactez-nous</button>
        </div>
      </div>
      <div class="ml-40">
        <img src="~~/assets/hero.jpg" alt="hero" class=" rounded-md" width="240" height="200" />
      </div>
      
    </div>
    <div class="  rounded-md mb-4">
    <ul class="mx-auto  flex justify-between items-center ">
        <li class="mt-10 mx-10" v-for="(sponsor, index) in sponsors" :key="index">
          <img :src="sponsor.logo" :alt="sponsor.name" class=" h-20 object-contain border rounded-full"   />
        </li>
      </ul>
    </div>
  </section>
</template>


<script setup>
import Hero from "~~/assets/hero.jpg" // Update path to use assets for NuxtPicture compatibility
import Banner from "~/components/Banner.vue"
import first from "~~/public/lesphotoszikagen/1.png"
import second from "~~/public/lesphotoszikagen/2.png"
import third from "~~/public/lesphotoszikagen/3.png"
import fourth from "~~/public/lesphotoszikagen/4.png"

const sponsors = ([
  {
    name: "Canon",
    logo: first,
  },
  {
    name: "Nikon",
    logo: second,
  },
  {
    name: "Sony",
    logo: third,
  },
  {
    name: "Fujifilm",
    logo: fourth,
  },
  
])


</script>
