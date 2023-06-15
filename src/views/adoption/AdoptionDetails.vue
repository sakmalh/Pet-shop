<template>
    <!-- component -->
    <div v-if="adoption">
    <section v-if="!showEdit" class="text-gray-700 body-font overflow-hidden bg-white">
    <div class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img class="lg:w-1/2 w-full object-cover object-center rounded-2xl border border-gray-200" :src="adoption.picUrl">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">Title</h2>
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{{ adoption.title }}</h1>
            <p class="leading-relaxed mt-3">{{ adoption.description }}</p>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div class="flex items-center">
                <span class="text-lg">Pet Type: {{ adoption.type }}</span>
            </div>
            <div class="ml-10">
                <span class="text-lg">Published By: {{ adoption.userName }}</span>
            </div>
            </div>
            <div class="flex">
            <button class="flex ml-auto text-white bg-orange-300 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded">Give a home</button>
            <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-orange-600 hover:bg-orange-100">
                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
            </button>
            <button @click="showEdit = !showEdit" v-if="isOwner" class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-orange-600 hover:bg-orange-100">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34"></path><polygon points="18 2 22 6 12 16 8 16 8 12 18 2"></polygon></svg>
            </button>
            <button @click="handleDelete" v-if="isOwner" class="rounded-full w-10 h-10 bg-gray-200 p-2 border-0 inline-flex items-center justify-center text-gray-500 ml-4 hover:text-red-600 hover:bg-red-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <g> <path fill="none" d="M0 0h24v24H0z"/> <path d="M17 6h5v2h-2v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V8H2V6h5V3a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v3zm1 2H6v12h12V8zm-4.586 6l1.768 1.768-1.414 1.414L12 15.414l-1.768 1.768-1.414-1.414L10.586 14l-1.768-1.768 1.414-1.414L12 12.586l1.768-1.768 1.414 1.414L13.414 14zM9 4v2h6V4H9z"/> </g> </svg>
            </button>
            </div>
        </div>
        </div>
    </div>
    </section>
    <section v-if="showEdit" class="text-gray-700 body-font overflow-hidden bg-white">
    <form @submit.prevent="handleSubmit" class="container px-5 py-24 mx-auto">
        <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img class="lg:w-1/2 w-full object-cover object-center rounded-2xl border border-gray-200" :src="adoption.picUrl">
        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 class="text-sm title-font text-gray-500 tracking-widest">Title</h2> 
            <input class= "w-5/6 text-gray-900 text-3xl title-font font-medium mb-1 border-2 border-gray-300 p-2 mt-2" placeholder="Post Title" type="text" v-model="adoption.title">
            <textarea class="w-5/6 leading-relaxed mt-3 border-2 p-3 border-gray-300" placeholder="Description" cols="47" v-model="adoption.description"></textarea>
            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
            <div class="flex items-center">
                <span class="text-lg">Pet Type: </span>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-white text-base border border-gray-300 rounded-lg p-2 mx-2 px-4 py-2 text-gray-700 leading-tight focus:outline-none focus:border-orange-300" v-model="adoption.type">
                                <option>Dog</option>
                                <option>Cat</option>
                                <option>Fish</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
            </div>
            <div class="ml-10">
                <span class="text-lg">Published By: {{ adoption.userName }}</span>
            </div>
            
            </div>
            <div class="flex items-start mb-5">
                <input
                class="flex mr-auto relative m-0 min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
                type="file"
                @change="handleChange"
                />
            </div>
            <div class="flex">
            <button v-if="!isPending" type="submit" class="flex ml-auto text-white bg-orange-300 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded">Edit</button>
            <button v-if="isPending" type="submit" class="flex ml-auto text-white bg-orange-500 border-0 py-2 px-3 rounded" disabled>
                <svg aria-hidden="true" class="h-5 mr-3 text-gray-200 animate-spin fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                </svg>
                Loading
            </button>
            <button @click="showEdit = !showEdit" class="w-10 h-10 bg-gray-200 border-0 inline-flex items-center py-2 px-10 rounded justify-center text-gray-500 ml-4 hover:text-white hover:bg-red-500">
                Cancel
            </button>
            </div>
        </div>
        </div>
    </form>
    </section>
    <h1 class="m-6 font-semi-bold text-3xl text-center text-orange-800">There's always more pets to adopt</h1>
    <ProductSuggestion :documents="documents"/>
    </div>
</template>

<script>
import getDocument from '@/composables/getDocument'
import getUser from '@/composables/getUser'
import useDocument from '@/composables/useDocument';
import { useRouter } from 'vue-router';
import { computed, ref, watch } from 'vue';
import ProductSuggestion from '@/components/ProductSuggestion.vue'
import useStorage from '@/composables/useStorage';
import getCollection from '@/composables/getCollection';

export default {
    props: ['id'],
    components: { ProductSuggestion },
    setup (props) {
        let { document: adoption, error } = getDocument('adoptions', props.id)
        const { updateDoc, deleteDoc } = useDocument('adoptions', props.id)
        const { user } = getUser()
        const router = useRouter()
        const showEdit = ref(false)
        const { filePath, url, uploadImage, deleteImage } = useStorage()
        const file = ref(null)
        const fileError = ref(null)
        const isPending = ref(false)

        const { error: getCollectionError, documents } = getCollection('adoptions', null, 6)

        const isOwner = computed(() => {
            return adoption.value && user.value && user.value.uid == adoption.value.userId
        })

        const handleSubmit = async (id) => {
            isPending.value = true
            await updateDoc({
                title: adoption.value.title,
                type: adoption.value.type,
                description: adoption.value.description
            })

            if (file.value) {
                await deleteImage(adoption.value.filePath)
                await uploadImage(file.value)
                await updateDoc({
                    picUrl: url.value,
                    filePath: filePath.value,
                })
            }
            isPending.value = true
            showEdit.value = false
        }

        const types = ['image/png', 'image/jpeg']

        const handleChange = (e)  => {
            const selected = e.target.files[0]

            if (selected && types.includes(selected.type)) {
                file.value = selected
                fileError.value = null
                console.log(selected)
            } else {
                file.value = null
                fileError.value = 'Only jpeg and png supported'
            }
        }

        const handleDelete = async () => {
            await deleteImage(adoption.value.filePath)
            await deleteDoc()     
            router.push({ name: 'UserAdoptions' })
        }

        watch(() => props.id, (newValue) => {
            location.reload()
        })

        return { isOwner, adoption, error, showEdit, isPending, handleChange, handleSubmit, handleDelete, documents }
    }
}
</script>
