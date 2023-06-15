<template>
   <section class="h-fit mb-14">
        <div class="container px-6 mt-28 mb-14">
            <div
            class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <!-- Left column container with background-->
            <div class="mb-12 md:mb-0 sm:w-7/12 md:w-6/12 lg:w-6/12">
                <img
                src="../../assets/signup.svg"
                class="w-full"
                alt="Phone image" />
            </div>

            <!-- Right column container with form -->
            <div class="md:w-8/12 lg:ml-6 lg:w-5/12">
                <form @submit.prevent="handleSubmit">
                    <!-- Display Name input -->
                <div class="relative mb-6">
                    <label
                    class="my-10"
                    >Display Name
                    </label>
                    <input
                    type="text"
                    class="peer block mt-2 min-h-[auto] w-full rounded border-0 bg-blue-50 px-3 py-[0.32rem] leading-[2.15] outline-none"
                    placeholder="Display Name"
                    v-model="displayName"
                    />  
                </div>

                <!-- Email input -->
                <div class="relative mb-6">
                    <label
                    class="my-10"
                    >Email address
                    </label>
                    <input
                    type="email"
                    class="peer block mt-2 min-h-[auto] w-full rounded border-2 bg-blue-50 px-3 py-[0.32rem] leading-[2.15] outline-none"
                    placeholder="Email address"
                    v-model="email"
                    />
                    
                </div>

                <!-- Password input -->
                <div class="relative mb-6">
                    <label
                    >Password
                    </label>
                    <input
                    type="password"
                    class="peer block mt-2 min-h-[auto] w-full rounded border-2 bg-blue-50 px-3 py-[0.32rem] leading-[2.15] outline-none"
                    placeholder="Password"
                    v-model="password"
                    />
                </div>

                <!-- Submit button -->

                <div v-if="error" class="text-red-500 text-md italic mb-4">{{ error }}</div>

                <button v-if="!isPending"
                    type="submit"
                    class="inline-block w-full rounded bg-orange-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Register
                </button>

                <button v-if="isPending"
                    type="submit"
                    disabled
                    class="inline-block w-full rounded bg-gray-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-gray-300 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    <svg aria-hidden="true" class="inline-block h-5 mr-3 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    Loading
                </button>
                

                <!-- Divider -->
                <div
                    class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                    <p
                    class="mx-4 mb-0 text-center font-semibold dark:text-neutral-200">
                    OR
                    </p>
                </div>

                <router-link :to="{ name: 'Login'}"
                    class="inline-block w-full text-center rounded bg-orange-300 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-orange-500 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
                    Login
                </router-link>

                </form>
            </div>
            </div>
        </div>
    </section>
</template>

<script>
import { ref } from 'vue'
import userSignup from '@/composables/userSignup'
import { useRouter } from 'vue-router'

export default {
    setup () {
        const { error, signup, isPending } = userSignup()
        const router = useRouter()

        const email = ref('')
        const password = ref('')
        const displayName = ref('')
        
        const handleSubmit = async () => {
            const res = await signup(email.value, password.value, displayName.value)
            if (!error.value) {
                console.log('User Signed up')
            }
        }

        return { email, password, displayName, isPending, error, handleSubmit }
    }
}
</script>

