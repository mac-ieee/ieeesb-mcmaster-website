import { LoginButton } from "@/components/auth/login-button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-[100vh] bg-blue-200">


      <div className="bg-white h-[30vh] rounded-2xl m-10">
       <div className="font-bold text-3xl m-10"> IEEE HomePage Authentication 🔒</div>
      <LoginButton>
        <div className=""> <button className="bg-slate-200 p-5 rounded-2xl">Click To Sign IN</button></div>
       </LoginButton>

      </div>

    </main>
  );
}
