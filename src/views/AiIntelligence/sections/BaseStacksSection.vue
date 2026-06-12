<script setup>
import BaseButton from '@/components/common/BaseButton.vue';

 defineProps({
  title: {
    type: String,
    default: ""
  },
  btnTitle:{
    type: String,
    default: ""
  }
 })
</script>

<template>
    <section class="base-stack-sec">
      <div class="container">
        <div class="hdr-wrp">
           <h2 class="sec-title">{{title}}</h2>
           <div v-if="btnTitle" class="btn-wrp">
            <base-button>
              {{ btnTitle }}
            </base-button>
           </div>
        </div>
        <div class="mid-wrp">
          <slot />
        </div>

      </div>
    </section>
</template>
