import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
})

// export const signInWithGoogle = async () => {
//   const data = await authClient.signIn.social({
//     provider: "google",
//   });
// };

// export const signInWithGithub = async () => {
//     const data = await authClient.signIn.social({
//         provider: "github"
//     })
// }

export const {signUp, signOut, useSession, signIn} = authClient

