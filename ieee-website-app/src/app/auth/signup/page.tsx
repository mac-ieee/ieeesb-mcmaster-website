
import { Card, CardHeader } from '@heroui/card'
import { Divider } from '@heroui/divider'
import { Link } from '@heroui/link'
import { redirect } from "next/navigation"
import { AuthError } from 'next-auth'
import { Button } from "@heroui/button";
import { Input } from "@heroui/input";
import { Form } from "@heroui/form";
import { createUserCredentials } from '@/models/api/credentials'
import { signIn } from '@/config/auth'

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

function CredentialsSection({ callbackUrl }: { callbackUrl?: string }) {
    return (
        <Form
            action={async (formData) => {
                "use server"
                try {
                    const name = formData.get("name") as string
                    const email = formData.get("email") as string
                    const password = formData.get("password") as string
                    await createUserCredentials(name, email, password)
                    await signIn("credentials", formData)
                } catch (error) {
                    if (error instanceof AuthError) {
                        return redirect(`/auth/signup?errors=${error.type}&callbackUrl=${callbackUrl}`)
                    }
                    throw error
                }
            }}
        >

            <Input
                name="name"
                id="name"
                label="Name"
                labelPlacement="outside"
                placeholder="Enter name"
                type="name"
                isRequired
            />
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

export default async function SignUpPage(props: {
    searchParams: Promise<{ callbackUrl: string | undefined, errors: string[] | string | undefined }>
}) {
    const errorsParams = (await props.searchParams).errors
    const errors = errorsParams ? (Array.isArray(errorsParams) ? errorsParams : [errorsParams]) : [];
    const callbackUrl = (await props.searchParams).callbackUrl

    return (<div className="flex flex-col items-center md:p-10 p-5 h-full">

        <Card className="flex-1 md:min-w-[400px]">
            <CardHeader className="flex gap-3">
                <div className="flex flex-col">
                    <p className="text-lg font-bold">Sign Up</p>
                    <p className="text-small text-default-500"><Link href="/api/auth/signin" className="text-small">Sign Up</Link> if you do not have an account</p>
                </div>
            </CardHeader>
            <Divider />

            <ErrorSection errors={errors} />

            <div className="p-4">
                <CredentialsSection callbackUrl={callbackUrl} />
            </div>

        </Card>

    </div>)
}