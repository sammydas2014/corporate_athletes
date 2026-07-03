<template>
  <div class="edit-profile-avatar">
    <!-- Profile Image Wrapper -->
    <div class="avatar-container">
      <img :src="imagePreview || defaultAvatar" alt="Profile Preview" class="avatar-image" />

      <!-- Overlay Hover Effect -->
      <label for="avatar-input" class="avatar-overlay">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
          class="camera-icon">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
        <span class="overlay-text">Change</span>
      </label>
    </div>

    <!-- Hidden Native File Input -->
    <input ref="fileInput" id="avatar-input" type="file" accept="image/*" class="hidden-input"
      @change="handleFileChange" />

    <!-- Action Buttons -->
    <div class="actions-wrapper">
      <button  @click="openFilePicker" type="button" class="btn-remove">

        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.7" clip-path="url(#clip0_830_621)">
            <path
              d="M19.9964 1.00568C19.4015 0.411728 18.5953 0.078125 17.7546 0.078125C16.914 0.078125 16.1078 0.411728 15.5129 1.00568L1.28189 15.2367C0.874358 15.6419 0.55123 16.1239 0.331199 16.6549C0.111168 17.1858 -0.00139823 17.7551 1.31086e-05 18.3298V20.1262C1.31086e-05 20.3582 0.0922004 20.5808 0.256295 20.7449C0.420389 20.909 0.642949 21.0012 0.875013 21.0012H2.67139C3.24606 21.0028 3.81534 20.8904 4.34627 20.6705C4.87721 20.4506 5.35926 20.1276 5.76451 19.7202L19.9964 5.48831C20.5901 4.89348 20.9235 4.0874 20.9235 3.24699C20.9235 2.40659 20.5901 1.60051 19.9964 1.00568ZM4.52726 18.4829C4.03377 18.9731 3.36698 19.2492 2.67139 19.2512H1.75001V18.3298C1.74913 17.985 1.81665 17.6434 1.94867 17.3248C2.08069 17.0063 2.27459 16.7171 2.51914 16.4739L13.3193 5.67381L15.3318 7.68631L4.52726 18.4829ZM18.7583 4.25106L16.5655 6.44468L14.553 4.43655L16.7466 2.24293C16.8788 2.11107 17.0356 2.00654 17.2081 1.93529C17.3807 1.86404 17.5656 1.82747 17.7522 1.82767C17.9389 1.82788 18.1237 1.86485 18.2961 1.93647C18.4685 2.0081 18.6251 2.11297 18.757 2.24512C18.8888 2.37726 18.9933 2.53408 19.0646 2.70662C19.1358 2.87917 19.1724 3.06405 19.1722 3.25073C19.172 3.4374 19.135 3.62221 19.0634 3.7946C18.9918 3.96698 18.8869 4.12357 18.7548 4.25543L18.7583 4.25106Z"
              fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_830_621">
              <rect width="21" height="21" fill="white" />
            </clipPath>
          </defs>
        </svg>

      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onUnmounted } from 'vue'

const props = defineProps({
  currentImageUrl: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['image-changed', 'image-removed'])

const defaultAvatar = 'https://unsplash.com'
const imagePreview = ref(props.currentImageUrl)

const fileInput = ref(null)

const handleFileChange = (event) => {
  const file = event.target.files?.[0]
  if (!file) return

  if (imagePreview.value && imagePreview.value.startsWith('blob:')) {
    URL.revokeObjectURL(imagePreview.value)
  }

  imagePreview.value = URL.createObjectURL(file)
  emit('image-changed', file)
}



const openFilePicker = () => {
    fileInput.value?.click()
}

onUnmounted(() => {
  if (imagePreview.value && imagePreview.value.startsWith('blob:')) {
    URL.revokeObjectURL(imagePreview.value)
  }
})
</script>

