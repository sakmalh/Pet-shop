import { projectAuth } from "@/firebase/config"
import { ref } from "vue"

const error = ref(null)
const isPending = ref(false)

const signup = async (email, password, displayName) => {
    error.value = null
    isPending.value = true

    try { 
        const res = await projectAuth.createUserWithEmailAndPassword(email, password)
        if (!res) {
            throw new Error('Could not complete signup')
        }
        await res.user.updateProfile({ displayName })

        error.value = null
        isPending.value = false

        console.log(res.user)

        return res
    } 
    catch(err) {
        console.log(err.message)
        error.value = err.message
        isPending.value = false
    } 

}

const userSignup = () => {
    return { error, signup, isPending }
}

export default userSignup

