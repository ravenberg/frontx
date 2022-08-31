import { BlitzPage } from "@blitzjs/next"
import { LoginForm } from "app/auth/components/LoginForm"
import { useRouter } from "next/router"
import AuthLayout from "../../app/core/layouts/AuthLayout"

const LoginPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <AuthLayout title="Log In">
      <LoginForm
        onSuccess={(_user) => {
          const next = router.query.next ? decodeURIComponent(router.query.next as string) : "/"
          return router.push(next)
        }}
      />
    </AuthLayout>
  )
}

export default LoginPage
