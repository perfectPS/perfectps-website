import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCzMcSSemYcSy0E6GzuszSfPR_0z-rUWow',
  authDomain: 'perfectps-ps-vpn.firebaseapp.com',
  projectId: 'perfectps-ps-vpn',
}

const app = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(app)

const googleProvider = new GoogleAuthProvider()

export async function signInWithGoogle(): Promise<string> {
  const result = await signInWithPopup(firebaseAuth, googleProvider)
  const idToken = await result.user.getIdToken()
  return idToken
}

export async function firebaseSignOut() {
  await signOut(firebaseAuth)
}
