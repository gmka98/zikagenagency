<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
</script>
<template>
<section class="xl:max-w-screen-lg mx-auto xl:mt-10" >
  <h1 class="capitalize text-4xl text-center underline mb-10">Bienvenue chez zikagen !</h1>

    <div class="grid grid-cols-1 md:grid-cols-5 mt-10 gap-20">
      
      <div class="col-span-2 border  border-4 rounded-md bg-black m-4">
            <img class=" h-96" src="~~/public/lesphotoszikagen/julien.png" width="400" height="200" alt="Julien Goy"/>
        </div>
        <div class="col-span-3">

          <div class="">
            <p class="text-gray-400">A Propos</p>
          <p class="text-3xl font-bold capitalize mb-4">
            une agence crée pour transformer vos projets en véritables succès.
          </p>
          <div class="space-y-2">
          <p class="">
            Derrière cette vision se trouve Julien Goy, fondateur passionné par le marketing et un expert engagé pour que chaque problème a sa solution et qui met son savoir-faire au service de vos besoins.
          </p>
          <p>
            Avec des années d'expérience et une approche profondément humaine, Julien a fondé ZIKAGEN dans le but d’offrir bien plus qu’un service : une véritable collaboration basée sur la confiance, la transparence et l'excellence.
          </p>
        </div>
        </div>
        <p class="text-gray-400 font-bold mt-6 mb-2">Notre mission </p>
        <p>
          Vous accompagnez à chaque étape de votre projet, en vous proposant des solutions
innovantes et personnalisées. Que ce soit pour vous aider à atteindre vos objectifs
ou relever de nouveaux défis, ZIKAGEN est votre partenaire stratégique.
        </p>
      </div>
      <div class="col-span-3">
          <p class="capitalize text-7xl mb-6 font-bold"> 
            Pourquoi nous choisir ?
          </p>
          <p class="mb-4 text-lg">
            Chez ZIKAGEN, nous croyons que chaque projet est unique et mérite une attention particulière. Travaillons ensemble pour bâtir votre succès !
          </p>
          <ul class="list-disc space-y-3 text-xl font-semibold">
            <li>Une expertise prouvée et une écoute attentive de vos besoins.
            </li>
            <li> Un engagement à construire des relations de confiance, durables et
              authentiques.
            </li>
            <li>
              Une créativité au service de solutions performantes et sur-mesure.
            </li>

          </ul>
          
        </div>
        <div class="col-span-2 flex gap-4 items-center mb-4">
          <div class="space-y-4 border border-4 rounded-md p-4 bg-black">
            <img class="w-full" src="~~/public/lesphotosdusite/picture.jpg" />
          </div>
          <div class="space-y-4 ">
            <img class="border border-4 rounded-md p-4 bg-black " src="~~/public/lesphotosdusite/model.jpg"/>
          <img class="border border-4 rounded-md p-4 bg-black" src="~~/public/lesphotosdusite/easy.jpg" />

        </div>
        </div>
        
    </div>
</section>
</template>
<script >
</script>