<template>
    <section class="xl:max-w-screen-lg mx-auto">
        <div class="grid grid-cols-1 mt-20 gap-10">
            <h1 class="text-5xl underline font-semibold">7 conseils pour faire une bonne campagne marketing sur les
                réseaux en 2025
            </h1>
            <img src="~~/public/lesphotosdusite/conseil.jpg" alt="conseils" class="w-full  object-fill rounded-md border border-2 border-black" />
            <ol class=" mt-5 space-y-10 ">                    
                <li v-for="(item, index) in tips" :key="index" class=" ">
                  <div class="flex items-center gap-4">
                  <span class=" font-bold text-3xl">{{ index + 1 }}.</span>
                    <h2 class="text-3xl font-bold  space-y-5 list-decimal">{{ item.title}}</h2>
                  </div>
                    <p class="text-lg mt-4">{{ item.description}}</p>
                </li>
            </ol>
        </div>

    </section>

</template>
<script setup>
const tips = [
  {
    title: "Optimisez votre visibilité grâce au SEO",
    description: "Assurez-vous que vos publications, descriptions et contenus intègrent des mots-clés stratégiques. Un bon référencement naturel booste votre présence en ligne et attire du trafic qualifié, même sur vos profils sociaux."
  },
  {
    title: "Utilisez Facebook Ads et Google Ads pour des campagnes ciblées",
    description: "Investissez dans des publicités bien ciblées pour atteindre précisément votre audience idéale. Nos experts vous accompagnent pour optimiser votre budget et maximiser vos résultats publicitaires."
  },
  {
    title: "Créez un site web vitrine professionnel",
    description: "Un site web bien conçu est la base d’une campagne réussie. Redirigez votre audience depuis vos réseaux sociaux vers un site qui reflète votre image, tout en intégrant des appels à l’action stratégiques."
  },
  {
    title: "Élaborez une stratégie marketing sur-mesure",
    description: "Une campagne efficace repose sur une vision claire. Définissez vos objectifs, identifiez vos KPI, et planifiez vos actions. Chez Zikagen, nous vous aidons à élaborer une stratégie adaptée à vos besoins."
  },
  {
    title: "Engagez votre audience avec un community management actif",
    description: "Publiez régulièrement et engagez votre communauté en répondant aux commentaires, en lançant des sondages ou en organisant des concours. L’interaction est la clé pour fidéliser vos abonnés."
  },
  {
    title: "Créez un écosystème cohérent sur les réseaux sociaux",
    description: "Assurez une présence homogène sur plusieurs plateformes (Instagram, TikTok, YouTube, etc.) pour multiplier les points de contact avec votre audience. Zikagen vous aide à coordonner et structurer cette présence."
  },
  {
    title: "Analysez vos performances et ajustez en continu",
    description: "Avec nos outils et notre expertise, suivez vos campagnes en temps réel. Identifiez ce qui fonctionne et ce qui peut être amélioré pour optimiser vos résultats et garantir le meilleur retour sur investissement."
  }
];
</script>