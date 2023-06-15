<template>
    <!-- component -->
    <div class="relative min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 sm:py-4 lg:px-8 lg:py-6 bg-no-repeat bg-cover py-10"
        style="background-image: url(https://static.vecteezy.com/system/resources/previews/015/432/940/non_2x/adopt-a-pet-from-an-animal-shelter-in-the-form-of-cats-or-dogs-to-care-for-and-look-after-in-flat-cartoon-hand-drawn-templates-illustration-vector.jpg);">
        <div class="absolute py-10 bg-black opacity-60 inset-0 z-0"></div>
        <div class="max-w-4xl mx-auto p-10 bg-white rounded-xl z-10">
            <div class="text-center">
                <h2 class="mt-5 text-3xl font-bold text-gray-900">
                    Adoption
                </h2>
                <p class="mt-2 text-sm text-gray-400">Publish your pet for adoption.</p>
            </div>
            <form class="mt-8 space-y-3" @submit.prevent="handleSubmit">
                <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                    <div>
                        <div class="grid grid-cols-1 space-y-2 mb-5">
                            <label class="text-sm font-bold text-gray-500 tracking-wide">Post Title</label>
                                <input class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-300" type="" placeholder="Title of the post" v-model="title">
                        </div>
                        <div class="grid grid-cols-1 space-y-2">
                            <div class="mb-3">
                                <label
                                    for="formFile"
                                    class="text-sm font-bold text-gray-500 tracking-wide"
                                    >Upload Image</label
                                >
                                <input
                                    class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100 dark:focus:border-primary"
                                    type="file"
                                    @change="handleChange"
                                    />
                                <div class="block text-red-400 text-sm font-bold mt-1">{{ fileError }}</div>
                                </div>
                        </div>
                                <p class="text-sm text-gray-300">
                                    <span>File type: types of images</span>
                                </p>
                        </div>
                        <div>
                    <div>
                        <div class="grid grid-cols-1 space-y-2">
                            <label class="text-sm font-bold text-gray-500 tracking-wide">Pet Type</label>
                            <div class="relative">
                                <select class="block appearance-none w-full bg-white text-base border border-gray-300 rounded-lg p-2 py-2.5 text-gray-700 leading-tight focus:outline-none focus:border-orange-300" v-model="type">
                                <option>Dog</option>
                                <option>Cat</option>
                                <option>Fish</option>
                                </select>
                                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                </div>
                            </div>
                        </div>
                        <div class="grid grid-cols-1 space-y-2">
                            <label class="text-sm font-bold text-gray-500 tracking-wide mt-5">Description</label>
                                <textarea class="text-base p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-300" type="" placeholder="Description of the pet" v-model="description"></textarea>
                        </div>
                    </div>
                    <div class="flex justify-end mt-6">
                            <button type="submit" class="my-5 w-full flex justify-center bg-orange-300 text-gray-100 p-4  rounded-full tracking-wide
                                        font-semibold  focus:outline-none focus:shadow-outline hover:bg-orange-500 shadow-lg cursor-pointer transition ease-in duration-300">
                            Publish for Adoption
                        </button>
                        </div>
                    </div>
                    </div>    
                </form>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import useStorage from '@/composables/useStorage'
import getUser from '@/composables/getUser'
import { timestamp } from '@/firebase/config'
import { useRouter } from 'vue-router'
import useCollection from '@/composables/useCollection'
import router from '@/router'

export default {
    setup () {
        const { filePath, url, uploadImage } = useStorage()
        const { error, addDoc } = useCollection('adoptions')
        const { user } = getUser()
        const router = useRouter()        

        const reader = new FileReader()
        const type = ref('')
        const title = ref('')
        const description = ref('')
        const file = ref(null)
        const fileError = ref(null)
        const isPending = ref(false)

        const handleSubmit = async () => {
            if (file.value){
                isPending.value = true
                await uploadImage(file.value)
                const res = await addDoc({
                                title: title.value,
                                description: description.value,
                                type: type.value,
                                userId: user.value.uid,
                                userName: user.value.displayName,
                                picUrl: url.value,
                                filePath: filePath.value,
                                createdAt: timestamp()
                            })
                isPending.value = false
                if (!error.value) {
                    router.push({ name: 'AdoptionDetails', params: { id: res.id }})
                }

            }
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

        return { title, description, handleSubmit, handleChange, fileError, isPending, type, file }
    }
}
</script>

<style>
	.has-mask {
		position: absolute;
		clip: rect(10px, 150px, 130px, 10px);
	}
</style>

