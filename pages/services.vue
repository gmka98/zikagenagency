<template>
    <section class="xl:max-w-screen-lg mx-auto">
        <h1 
            class="bg-center bg-no-repeat bg-[url('~~/public/lesphotosdusite/services.jpg')] bg-gray-700 bg-blend-multiply 
                   text-4xl text-center font-semibold capitalize py-6  mt-5 text-white"
        >
            Services
        </h1>

        <div>
            <p class="text-center mt-5">
                Chez <strong>Zikagen</strong>, nous mettons à votre disposition une gamme de services sur-mesure
                pour maximiser votre impact et développer votre présence en ligne :
            </p>

            <dl class="mt-4 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 ">
                <div v-for="(service, index) in services" :key="index" class="flex border border-4 border-yellow-600 rounded-xl p-8  text-black">
                    <Icon :name="service.icon" class="w-12 h-12 text-yellow-500" />
                    <div class="ml-3">
                        <dt class="text-lg font-semibold">{{ service.title }}</dt>
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
        icon: "material-symbols:counter-1-outline-rounded",
        title: "SEO (Référencement naturel)",
        description: "Optimisez votre visibilité sur les moteurs de recherche et attirez un trafic qualifié."
    },
    {
        icon: "icon-park-solid:ad",
        title: "Facebook Ads & Google Ads",
        description: "Déployez des campagnes publicitaires efficaces pour toucher votre audience idéale."
    },
    {
        icon:"material-symbols:web-asset-sharp",
        title: "Création de site web vitrine",
        description: "Valorisez votre art avec un site professionnel, esthétique et performant."
    },
    {
        icon:"simple-icons:microstrategy",
        title: "Stratégie marketing",
        description: "Définissez un plan d’action clair et cohérent pour atteindre vos objectifs."
    },
    {
        icon:"material-symbols:group-add-rounded",
        title: "Community management",
        description: "Engagez et fidélisez votre communauté sur les réseaux sociaux."
    },
    {
        icon:"game-icons:impact-point",
        title: "Mise en place d’un écosystème social",
        description: "Structurez et harmonisez votre présence digitale pour un maximum d'impact."
    },
];
</script>
