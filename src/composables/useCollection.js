import { ref } from "vue"
import { projectAuth, projectFirestore } from "@/firebase/config"

const useCollection = (collection) => {
    const error = ref(null)
    const isPending = ref(false)

    
    const addDoc = async (doc) => {
        error.value = null
        isPending.value = true

        try {
            const res = await projectFirestore.collection(collection).add(doc)
            isPending.value = false
            return res
        } catch(err) {
            console.log(err.message)
            error.value = 'Could not add document'
            isPending.value = false
        }
    }

    return { error, addDoc, isPending}
}

export default useCollection