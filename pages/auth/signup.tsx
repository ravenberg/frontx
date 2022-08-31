import AuthLayout from "../../app/core/layouts/AuthLayout"
import { useRouter } from "next/router"
import { SignupForm } from "app/auth/components/SignupForm"
import { BlitzPage, Routes } from "@blitzjs/next"

const SignupPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <AuthLayout title="Sign Up">
      <SignupForm onSuccess={() => router.push(Routes.Home())} />
    </AuthLayout>
  )
}

export default SignupPage
