<script setup>
  defineProps({
    data:{
      type: Object,
      default: () => ({})
    }
  })
</script>

<template>
  <div class="regSummry-crd">
    <div class="imgWrp">
      <img :src="data.image" alt="">
      <span class="date-time">
        <span class="date">{{ data.date.day }}</span>
        <span class="month">{{ data.date.month }}</span>
      </span>
    </div>
    <div class="summary-data">
      <h3>{{ data.title }}</h3>
      <div class="evnt-dtls">
        <p>
          <span>
            <img :src="data.date.dateIcon" alt="">
          </span>
          {{ data?.date?.fullDate }}
        </p>
        <p>
          <span>
            <img :src="data.timeIcon" alt="">
          </span>
          {{ data?.time }}
        </p>
        <p>
          <span>
            <img :src="data?.locationIcon" alt="">
          </span>
          {{ data?.location }}
        </p>
        <p>
          <span>
            <img :src="data?.registractionBadge" alt="">
          </span>
          {{ data?.registrationType }}
        </p>
      </div>
      <div class="price-wrap">
        <h6>Price</h6>
        <p class="price-person"><span class="price">{{ data?.price?.amount }}</span> {{ data?.price?.vat }}  </p>
        <p class="person-type">{{ data?.price?.label }}</p>
      </div>
      <div class="streming-seat-wrp">
        <h6>SEATS REMAINING</h6>
        <p>
          <span class="icon">
            <img :src="data?.seats?.seatIcon" alt="">
          </span>
          <span class="seat">
            <span class="book-seat">{{ data?.seats?.remaining }}</span>
            /{{ data?.seats?.total }}
          </span>
        </p>
      </div>
      <ul class="benifit-wrap">
        <li v-for="(item, index) in data?.benefits" :key="index" >
          <span class="icon">
            <img :src="item?.icon" alt="">
          </span>
          <span class="text">
            {{ item?.text }}
          </span>
        </li>

      </ul>

    </div>
  </div>
</template>
