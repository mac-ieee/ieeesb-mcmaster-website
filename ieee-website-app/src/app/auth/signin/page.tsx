
import { Card, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { Link } from '@heroui/link'
import { providerMap, signIn } from '@/config/auth'
import { redirect } from "next/navigation"
import { AuthError } from 'next-auth'
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";

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
        <Form
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
            <Button type="submit" className="w-full ">
                <span>Sign in with {provider.name}  </span>
            </Button>
        </Form>
    )
}

function CredentialsSection() {
    return (
        <Form
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
            <Input
                name="email"
                id="email"
                label="Email"
                labelPlacement="outside"
                placeholder="Enter your email"
                type="email"
                isRequired
            />
            <Input
                name="password"
                id="password"
                label="Password"
                labelPlacement="outside"
                type="password"
                placeholder="Enter your password"
                isRequired
            />
            <div className="flex flex-row w-full gap-4">
                <Button className="w-full flex-1" color="primary" type="submit">Sign in</Button>
            </div>
        </Form>
    )
}

export default async function SignInPage(props: {
    searchParams: Promise<{ callbackUrl: string | undefined, errors: string[] | string | undefined }>
}) {
    const errorsParams = (await props.searchParams).errors
    const errors = errorsParams ? (Array.isArray(errorsParams) ? errorsParams : [errorsParams]) : [];
    const callbackUrl = (await props.searchParams).callbackUrl

    return (<div className="flex flex-col items-center md:p-10 p-5 h-full">

        <Card className="flex-1 md:min-w-[400px]">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Sign In</p>
                    <p className="text-small text-default-500"><Link href="/auth/signup" className="text-small">Sign Up</Link> if you do not have an account</p>
                </div>
            </CardHeader>
            <Divider />

            <ErrorSection errors={errors} />

            <div className="p-4">
                <CredentialsSection />
            </div>

            <Divider />

            <div className="p-4">
                {Object.values(providerMap).map((provider) => (
                    <ProviderSection key={provider.id} provider={provider} callbackUrl={callbackUrl} />
                ))}
            </div>

        </Card>

    </div>)
}