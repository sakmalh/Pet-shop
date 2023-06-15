import { ref } from "vue"
import { projectAuth } from "@/firebase/config"

const error = ref(null)
const isPending = ref(false)

const login = async (email, password) => {
    isPending.value = true
    error.value = null

    try {
        console.log('Try login')
        const res = await projectAuth.signInWithEmailAndPassword(email, password)
        error.value = null
        isPending.value = false
        console.log(res)
        
        return res
    } catch(err) {
        console.log(err.value)
        error.value = 'Incorrect Login Credentials'
        isPending.value = false
    }
}

const userLogin = () => {
    return { error, login, isPending }
}

export default userLogin