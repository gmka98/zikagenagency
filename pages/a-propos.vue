<script setup lang="ts">
import Navbar from '~/components/Navbar.vue';
</script>
<template>
<section class="xl:max-w-screen-lg mx-auto xl:mt-10" >
  <h1 class="capitalize text-4xl text-center underline mb-10">Bienvenue chez zikagen !</h1>

    <div class="grid grid-cols-1 md:grid-cols-5 mt-10 gap-20">
        <div class="col-span-3">

          <div class="">
            <p class="text-gray-400 font-bold">A Propos</p>
          <p class="text-3xl font-bold capitalize font-serif mb-4">
            une agence crée pour transformer vos projets en véritables succès.
          </p>
          <hr class="mr-80 border-t-4 mb-4 border-yellow-500"/>
          <div class="space-y-2">
          <p class="">
            Derrière cette vision se trouve Julien Goy, fondateur passionné par le marketing et un expert engagé pour que chaque problème ait sa solution et qui met son savoir-faire au service de vos besoins.
          </p>
          <p>
            Avec des années d'expérience et une approche profondément humaine, Julien a fondé ZIKAGEN dans le but d’offrir bien plus qu’un service : une véritable collaboration basée sur la confiance, la transparence et l'excellence.
          </p>
          <p class="text-9xl font-bold">
          </p>
        </div>
        </div>
       
      </div>
      <div class="col-span-2 border  border-4 bg-black rounded-md border-yellow-500 p-4">
            <img class="h-96 border-yellow-500 border bg-[url('~~/public/lesphotosdusite/portrait.jpg')]" src="~~/public/lesphotoszikagen/julien.png" width="400" height="200" alt="Julien Goy"/>
        </div>
        <div class="col-span-2 border border-4 border-yellow-500  rounded-md p-4 bg-black">
          <img src="~~/public/lesphotosdusite/easy.jpg"/>
        </div>
      <div class="col-span-3">
        <p class="text-gray-400 font-bold mt-6 mb-2">Notre mission </p>
        <p class="text-4xl font-bold font-serif mb-8">
          Vous accompagnez à chaque étape de votre projet
        </p>
        <hr class="mr-80 border-t-4 mb-4 border-yellow-500"/>

        <div class="space-y-5">
          <p>
          Chez Zikagen, nous mettons à votre disposition des solutions innovantes et personnalisées pour maximiser votre impact et renforcer votre présence en ligne.
        </p>
        <p>
          Que vous souhaitiez atteindre de nouveaux objectifs ou relever des défis ambitieux, Zikagen est votre partenaire stratégique. Nous vous accompagnons à chaque étape avec une approche sur mesure et une expertise dédiée à votre réussite.
        </p>
        <p>
          Grâce à nos services, vous bénéficiez d’une visibilité accrue, d’une communication optimisée et d’une stratégie digitale performante pour vous démarquer dans votre domaine.
        </p>
        </div>
        
      </div>
      
      <div class="col-span-3">
          <p class="capitalize font-serif text-7xl mb-6 font-bold"> 
            Pourquoi nous choisir ?
          </p>
          <p class="mb-4 text-lg">
            Chez ZIKAGEN, nous croyons que chaque projet est unique et mérite une attention particulière. Travaillons ensemble pour bâtir votre succès !
          </p>
          <ul class="list-disc space-y-3 text-xl ">
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
          <div class="space-y-4 border border-4 border-yellow-500  rounded-md p-4 bg-black">
            <img class="w-full" src="~~/public/lesphotosdusite/picture.jpg" />
          </div>
          <div class="space-y-4 ">
            <img class="border border-4 border-yellow-500  rounded-md p-4 bg-black " src="~~/public/lesphotosdusite/model.jpg"/>
          <img class="border border-4 border-yellow-500  rounded-md p-4 bg-black" src="~~/public/lesphotosdusite/interview.jpg" />

        </div>
        </div>
        
    </div>
</section>
</template>
<script >
</script>