<template>
  <section class="accelerate-section" >
    <div class="container">
      <div class="row">
        <div class="col-md-6">
          <h2 class="sec__title">Ready to accelerate performance with AI?</h2>
        </div>
        <div class="col-md-6">
          <div class="btnWrp">
            <BaseButton
              class="btn-secondary"
            >
              Book a Strategy Call
            </BaseButton>
            <BaseButton
              class="btn-outline-white btn-outline-trnp"
            >
              Submit an rfp
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>
<script setup>
import BaseButton from '@/components/ui/BaseButton.vue';
</script>
<style scoped>
.accelerate-section{
  padding: 83px 0;
  background-color: var(--bs-dark);
  border-bottom: 2px solid var(--bs-white);
}
.accelerate-section > .row{
  justify-content: space-between;
}
.btnWrp {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
}
.accelerate-section .sec__title{
  color: var(--bs-white);
  margin: 0;
}
.accelerate-section .row {
    align-items: center;
}
.btn-outline-trnp {
    background: transparent;
    color: var(--bs-white);
}
.btn-outline-trnp:hover{
  background: var(--bs-white);
  color: var(--bs-dark);
}
</style>
