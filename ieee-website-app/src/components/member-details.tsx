import { ChapterMember } from "@/models/api/students";
import { prisma } from "@/models/prisma";
import Image from "next/image";



export async function MemberDetails({ member }: { member: ChapterMember }) {
    const profile_picture = member.profile_picture ? member.profile_picture : "/not-found.png";

    return (<section className="border flex-1 flex flex-col rounded-xl p-2 drop-shadow-md bg-background hover:cursor-pointer hover:scale-105 transition-transform duration-300">
        <Image src={profile_picture} alt={member.name} className="rounded-lg w-full" width={200} height={400} />
        <h2 className="text-xl flex-1 font-bold py-3">{member.name}</h2>
        <p className="text-md"><strong>Role: </strong>{member.StudentRole.map(role => role.Role.name).join(", ")}</p>
        <p className="text-md"><strong>Entrance Year: </strong>{member.entrance_year.toDateString()}</p>
        <p className="text-md"><strong>Major: </strong>{member.major}</p>
        <p className="text-md"><strong>Description: </strong>{member.description}</p>
        {member.graduation_year && <p className="text-md"><strong>Graduation Year: </strong>{member.graduation_year.toDateString()}</p>}
    </section>);
}