<template>
    <div v-if="isModalOpen" class="fixed inset-0 flex items-center justify-center z-10">
        <div
      class="inline-block px-2 py-6 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl lg:w-2xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full"
      role="dialog" aria-modal="true" aria-labelledby="modal-headline">
      <div class="pb-2 bg-white">
        <div class="flex-col items-center sm:flex">
          <div
            class="flex items-center justify-center flex-shrink-0 w-12 h-12 p-4 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-16 sm:w-16">
            <svg class="w-full h-full text-red-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <line x1="19" y1="5" x2="5" y2="19"></line>
              <circle cx="6.5" cy="6.5" r="2.5"></circle>
              <circle cx="17.5" cy="17.5" r="2.5"></circle>
            </svg>
          </div>
          <div class="mt-3 mb-1 text-center sm:ml-4 sm:text-left">
            <h3 class="pt-1 text-3xl font-black leading-6 text-gray-900" id="modal-headline">
              Discount
            </h3>
          </div>
        </div>
      </div>
      <div class="w-full text-base text-center text-gray-600">
        use the coupon code below
      </div>
      <div class="px-4 pt-1 text-xs bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
        <div
          class="w-full p-4 my-3 font-mono text-lg text-center text-gray-600 border-4 border-red-400 border-dashed rounded select-all">
          {{ random }}</div>
      </div>
      <div class="justify-center w-full px-4 mt-2 font-sans text-xs leading-6 text-center text-gray-500">
        <a href="#_">Terms and conditions apply</a>
      </div>
        <button @click="closeModal" class="ml-auto rounded-md w-full p-3 mx-10 mt-2 font-sans text-xl  bg-red-200  text-center text-gray-500 hover:bg-red-500 hover:text-white">
            Close
        </button>
    </div>
    </div>
</template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    setup(props, { emit }) {
      const isModalOpen = ref(true);
      const random = generateRandomNumber()
      function closeModal() {
        isModalOpen.value = false;
        emit('close');
      }

      function generateRandomNumber() {
        let randomNumber = "";
        for (let i = 0; i < 4; i++) {
            // Generate a random 4-digit number
            let segment = Math.floor(1000 + Math.random() * 9000);

            // Append the segment to the random number string
            randomNumber += segment;

            // Add a hyphen (-) after each segment (except the last one)
            if (i < 3) {
            randomNumber += "-";
            }
        }

        return randomNumber;
        }
        
      return {
        isModalOpen,
        closeModal,
        random
      };
    }
  }
  </script>
  