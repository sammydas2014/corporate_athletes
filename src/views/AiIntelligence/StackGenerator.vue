<script setup>
  import BaseStackForm from "@/components/common/BaseStackForm.vue";
  import { useRouter } from "vue-router";

  const router = useRouter();
  function handleFormSubmit(){
    console.log('form Submit')
    router.push("/ai-intelligence/outcome");
  }
</script>

<template>
  <main class="stack-generator-page">
    <section class="stackgenerate-section">
      <div class="container">
        <div class="stack-hdng">
          <span class="title__eyebrow">NEW BUILD</span>
          <h1>Build Your AI Stack</h1>
          <p>
            Generate a tailored AI architecture based on your business context and existing systems
          </p>
        </div>
        <BaseStackForm @submit="handleFormSubmit" />
      </div>
    </section>
  </main>
</template>


