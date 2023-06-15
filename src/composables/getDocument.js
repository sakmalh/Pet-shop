import { ref, watchEffect } from "vue"
import { projectFirestore } from "@/firebase/config"

const getDocument = (collection, id) => {
    const document = ref(null)
    const error = ref(null)

    let documentRef = projectFirestore.collection(collection).doc(id)

    const unsub = documentRef.onSnapshot(doc => {
        if (doc.data()) {
            document.value = { ...doc.data(), id: doc.id }
            error.value = null
        } else {
            error.value = 'Document does not exist'
        }
        
    }, (err) => {
        console.log(err.message)
        error.value = 'Could not fetch document'
    })

    watchEffect((onInvalidate) => {
        onInvalidate(() => unsub())
    })

    return { document, error }
}



export default getDocument