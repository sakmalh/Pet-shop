<template>
    <nav class="flex items-center justify-between flex-wrap bg-white p-6 border-b border-gray-200 shadow-md ">
        <div class="flex items-center flex-shrink-0 text-black mr-14">
            <img src="../assets/petlogo.png" alt="" class="h-10 mr-3 mt-0">
            <span class="font-semibold text-2xl tracking-tight ml-2">Pet Shop</span>
        </div>
        <div class="block lg:hidden">
            <button class="flex items-center px-3 py-2 border rounded text-orange-400 border-orange-400  hover:text-white hover:border-white hover:bg-orange-400 " @click="showNav = !showNav">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
            </button>
        </div>
        <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:m-auto" :class="{ 'hidden': !showNav }">
            <div class="text-sm lg:flex-grow">
            <router-link :to="{ name: 'Home'}" class="block mt-4 text-xl lg:inline-block lg:mt-0 text-black hover:text-orange-400 mr-4 cursor-pointer transition ease-in duration-300">
                Home
            </router-link>
            <router-link :to="{ name: 'Items'}" class="block mt-4 text-xl lg:inline-block lg:mt-0 text-black hover:text-orange-400 mr-4 cursor-pointer transition ease-in duration-300">
                Pet Items
            </router-link>
            <router-link :to="{ name: 'Adoptions'}" class="block mt-4 text-xl lg:inline-block lg:mt-0 text-black hover:text-orange-400 mr-4 cursor-pointer transition ease-in duration-300">
                Rescue Center
            </router-link>
            <router-link :to="{ name: 'Dog'}" class="block mt-4 text-xl lg:inline-block lg:mt-0 text-black hover:text-orange-400 mr-4 cursor-pointer transition ease-in duration-300">
                Dog Pictures
            </router-link>
            <button v-if="user" @click="openModal" class="block mt-4 text-xl lg:inline-block lg:mt-0 text-black hover:text-orange-400 cursor-pointer transition ease-in duration-300">
                Coupon
            </button>
            
            </div>
            <div v-if="user">
                <router-link :to="{ name: 'UserAdoptions'}" class="inline-block text-md px-4 py-2 leading-none border rounded text-orange-400 border-orange-400 hover:border-transparent hover:text-white hover:bg-orange-400 mt-4 lg:mt-0 mr-4 cursor-pointer transition ease-in duration-300">My Adoptions</router-link>
                <a @click='handleClick' href="#" class="inline-block text-md px-4 py-2 leading-none border rounded text-orange-400 border-orange-400 hover:border-transparent hover:text-white hover:bg-orange-400 mt-4 lg:mt-0 mr-4 cursor-pointer transition ease-in duration-300">Logout</a>
            </div>
            <div v-else>
                <router-link :to="{ name: 'Signup'}" class="inline-block text-md px-4 py-2 leading-none border rounded text-orange-400 border-orange-400 hover:border-transparent hover:text-white hover:bg-orange-400 mt-4 lg:mt-0 mr-4 cursor-pointer transition ease-in duration-300">Register</router-link>
                <router-link :to="{ name: 'Login'}" class="inline-block text-md px-4 py-2 leading-none border rounded text-orange-400 border-orange-400 hover:border-transparent hover:text-white hover:bg-orange-400 mt-4 lg:mt-0 mr-4 cursor-pointer transition ease-in duration-300">Sign In</router-link>
            </div>
        </div>
    </nav>
    <CouponModal v-if="isModalOpen" @close="handleModalClose" />
</template>

<script>
import userLogout from '@/composables/userLogout'
import getUser from '@/composables/getUser'
import router from '@/router'
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import CouponModal from './CouponModal.vue'

export default {
    components: {
        CouponModal
    },
    setup() {
        const { logout } = userLogout()
        const { user } = getUser()
        const showNav = ref(false)
        const isModalOpen = ref(false);


        function openModal() {
            isModalOpen.value = true;
        }

        function handleModalClose() {
            isModalOpen.value = false;
        }


        const handleClick = async () => {
            await logout()
            console.log('user logged out')
            router.push({ name: 'Login' })
        }

        return { handleClick, user, showNav, openModal, handleModalClose, isModalOpen}
    }
}
</script>
