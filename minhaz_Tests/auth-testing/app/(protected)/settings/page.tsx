import { auth,signOut } from "@/auth";


const SettingPage = async () => {

  const session = await auth();
  return (
    <>
   <div>Your Session is:</div>
   <div>{JSON.stringify(session)}</div>
   <form action={async () =>{
    "use server";
    await signOut()

   }}>

    <button type="submit">Sign Out</button>


   </form>

   </>
   
  );
}

export default SettingPage;