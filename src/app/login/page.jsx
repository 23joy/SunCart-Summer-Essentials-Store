"use client";
import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";
import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GrGoogle } from "react-icons/gr";
import { toast } from "react-toastify";

export default function LoginPage() {
    const router = useRouter()
    const onSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const { data, error } = await authClient.signIn.email({
            email,
            password,
        });
        if (error) {
            toast.error(error.message)

        }
        if(data){
            router.push('/')
        }
    }
    const handleGoogleSingIn = async () => {
        const data = await authClient.signIn.social({
            provider: "google"
        })
        if(data){
            toast.success("SignUp successfully");
        }

    };

    return (
        <div className="p-10 m-10">
            <Card className=" mx-auto">
                <h1 className="text-center text-2xl font-bold">Log In </h1>

                <Form className="flex mx-auto flex-col gap-4" onSubmit={onSubmit}>
                    <TextField
                        isRequired
                        name="email"
                        type="email"
                        validate={(value) => {
                            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
                                return "Please enter a valid email address";
                            }

                            return null;
                        }}
                    >
                        <Label>Email</Label>
                        <Input placeholder="john@example.com" />
                        <FieldError />
                    </TextField>

                    <TextField
                        isRequired
                        minLength={8}
                        name="password"
                        type="password"
                        validate={(value) => {
                            if (value.length < 8) {
                                return "Password must be at least 8 characters";
                            }
                            if (!/[A-Z]/.test(value)) {
                                return "Password must contain at least one uppercase letter";
                            }
                            if (!/[0-9]/.test(value)) {
                                return "Password must contain at least one number";
                            }

                            return null;
                        }}
                    >
                        <Label>Password</Label>
                        <Input placeholder="Enter your password" />
                        <Description className="text-red-500">
                            Must be at least 8 characters with 1 uppercase and 1 number
                        </Description>
                        <FieldError />
                    </TextField>

                    <div className="flex gap-2">
                        <Button type="submit" className="w-full">
                            <Check />
                            Submit
                        </Button>
                    </div>
                    <p className="flex justify-center">If you not Register? <Link href={'/signup'} className="text-emerald-800 ">Register Now</Link></p>
                    <p className=" text-center">Or</p>
                    <Button onClick={handleGoogleSingIn} className={'w-full'}><GrGoogle></GrGoogle>Sign In with Google</Button>
                </Form>
            </Card>
        </div>
    );
}