<template>
    <section class="xl:max-w-screen-lg mx-auto">
        <h1 
            class="bg-center bg-no-repeat bg-[url('~~/public/lesphotosdusite/services.jpg')] bg-gray-700 bg-blend-multiply 
                   text-4xl text-center font-semibold capitalize mt-10 py-10 text-white"
        >
            Services
        </h1>

        <div>
            <p class="text-center mt-5">
                Chez <strong>Zikagen</strong>, nous mettons à votre disposition une gamme de services sur-mesure
                pour maximiser votre impact et développer votre présence en ligne :
            </p>

            <dl class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="(service, index) in services" :key="index" class="flex">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" fill="none" 
                        viewBox="0 0 24 24" stroke="currentColor" 
                        aria-hidden="true" class="flex-shrink-0 w-6 h-6 text-violet-600"
                    >
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <div class="ml-3">
                        <dt class="text-lg font-medium">{{ service.title }}</dt>
                        <dd class="mt-2 text-gray-600">{{ service.description }}</dd>
                    </div>
                </div>
            </dl>
        </div>

        <p class="text-center mt-10">
            Nous vous accompagnons à chaque étape, avec une approche personnalisée et une expertise dédiée à votre réussite.
        </p>
        <img src="~~/public/lesphotosdusite/services.jpg" />
    </section>
</template>

<script setup>
const services = [
    {
        title: "SEO (Référencement naturel)",
        description: "Optimisez votre visibilité sur les moteurs de recherche et attirez un trafic qualifié."
    },
    {
        title: "Facebook Ads & Google Ads",
        description: "Déployez des campagnes publicitaires efficaces pour toucher votre audience idéale."
    },
    {
        title: "Création de site web vitrine",
        description: "Valorisez votre art avec un site professionnel, esthétique et performant."
    },
    {
        title: "Stratégie marketing",
        description: "Définissez un plan d’action clair et cohérent pour atteindre vos objectifs."
    },
    {
        title: "Community management",
        description: "Engagez et fidélisez votre communauté sur les réseaux sociaux."
    },
    {
        title: "Mise en place d’un écosystème social",
        description: "Structurez et harmonisez votre présence digitale pour un maximum d'impact."
    },
];
</script>
