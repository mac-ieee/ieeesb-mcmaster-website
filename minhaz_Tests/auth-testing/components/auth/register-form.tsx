"use client";
import { Social } from "./social";
import { useState, useTransition } from "react";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import { z } from "zod";
import {register} from "@/actions/register";

import {RegisterSchema} from "@/schemas";
import { Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"

import { FormError } from "@/components/form-error";

import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { FormSuccess } from "../form-success";
import Link from "next/link";




export const RegisterForm = () => {

    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const form = useForm<z.infer<typeof RegisterSchema>>({
        resolver: zodResolver(RegisterSchema),
        defaultValues: {
            email: "",
            password: "",
            name: "",
        }
    });

    const onSubmit = (values : z.infer<typeof RegisterSchema>) => {
        console.log(values);
        setError("");setSuccess("");

        startTransition(() => {
            register(values).then((data)=>{
                setError(data.error);
                setSuccess(data.success);
            });
        }); 
        //can also do axios.post("/api/login", values).then().catch() something such


    }



    return (
        <>
        <div className="p-10 w-[40vw] h-min-[20vh] rounded-2xl bg-white items-center justify-center">
        Create an Account 😄

        <div className="">
            <Form {...form} >
                <form onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
                >
                    <div className ="space-y-4">
                        <FormField 
                        control={form.control}
                        name="email"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input {...field} 
                                    disabled={isPending}
                                    placeholder="email@example.com" type="email" />


                                </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>

                            </FormItem>
                        )}
                        />
                        <FormField 
                        control={form.control}
                        name="name"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Name</FormLabel>
                                <FormControl>
                                    <Input {...field} 
                                    disabled={isPending}
                                    placeholder="example"/>


                                </FormControl>
                                <FormMessage>{form.formState.errors.email?.message}</FormMessage>

                            </FormItem>
                        )}
                        />

                        <FormField 
                        control={form.control}
                        name="password"
                        render={({field}) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input {...field} 
                                    disabled={isPending}
                                    placeholder="******" type="password" />


                                </FormControl>
                                <FormMessage>{form.formState.errors.password?.message}</FormMessage>

                            </FormItem>
                        )}
                        />

                    </div>

                    <FormError message={error}/>
                    <FormSuccess message={success}/>
                    <div className="h-[1px]"></div>

                    <Link href="/auth/login" className="text-blue-500">
                        Already Have an Account?
                    </Link>
                    
                
                    <Button 
                    disabled={isPending}
                    type="submit"
                    className="w-full">
                        Create an Account
                        
                    </Button>

                </form>

            </Form>

            <Social></Social>
        </div>


        </div>
        
        </>
    );
}
