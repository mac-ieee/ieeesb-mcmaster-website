
import { Card, CardHeader, CardBody, CardFooter } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { Link } from '@heroui/link'
import { providerMap, signIn } from '@/config/auth'
import { redirect } from "next/navigation"
import { AuthError } from 'next-auth'

function ErrorSection({ errors }: { errors: string[] }) {
    if (errors.length > 0) {
        return (
            <>
                <div className="p-3">
                    <div className="text-red-500">
                        {errors.map((error) => (
                            <p key={error}>{error}</p>
                        ))}
                    </div>
                </div>
                <Divider />
            </>)
    }

    return <></>;
}

function ProviderSection({ provider, callbackUrl }: { provider: { id: string, name: string }, callbackUrl?: string }) {
    return (
        <form
            action={async () => {
                "use server"
                try {
                    await signIn(provider.id, {
                        redirectTo: callbackUrl,
                    })
                } catch (error) {
                    // Signin can fail for a number of reasons, such as the user
                    // not existing, or the user not having the correct role.
                    // In some cases, you may want to redirect to a custom error
                    if (error instanceof AuthError) {
                        return redirect(`/auth/signin?errors=${error.type}`)
                    }

                    // Otherwise if a redirects happens Next.js can handle it
                    // so you can just re-thrown the error and let Next.js handle it.
                    // Docs:
                    // https://nextjs.org/docs/app/api-reference/functions/redirect#server-component
                    throw error
                }
            }}
        >
            <button type="submit">
                <span>Sign in with {provider.name}</span>
            </button>
        </form>
    )
}

function CredentialsSection() {
    return (
        <form
            action={async (formData) => {
                "use server"
                try {
                    await signIn("credentials", formData)
                } catch (error) {
                    if (error instanceof AuthError) {
                        return redirect(`/auth/signin?errors=${error.type}`)
                    }
                    throw error
                }
            }}
        >
            <label htmlFor="email">
                Email
                <input name="email" id="email" />
            </label>
            <label htmlFor="password">
                Password
                <input name="password" id="password" />
            </label>
            <input type="submit" value="Sign In" />
        </form>
    )
}

export default async function SignInPage(props: {
    searchParams: Promise<{ callbackUrl: string | undefined, errors: string[] | string | undefined }>
}) {
    const errorsParams = (await props.searchParams).errors
    const errors = errorsParams ? (Array.isArray(errorsParams) ? errorsParams : [errorsParams]) : [];
    const callbackUrl = (await props.searchParams).callbackUrl

    return (<div className="flex flex-col items-center p-10 h-full">

        <Card className="flex-1">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Sign In</p>
                    <p className="text-small text-default-500"><Link href="/auth/signup" className="text-small">Sign Up</Link> if you do not have an account</p>
                </div>
            </CardHeader>
            <Divider />

            <ErrorSection errors={errors} />

            <CardBody>
                <CredentialsSection />
                {Object.values(providerMap).map((provider) => (
                    <ProviderSection key={provider.id} provider={provider} callbackUrl={callbackUrl} />
                ))}
            </CardBody>

        </Card>

    </div>)
}