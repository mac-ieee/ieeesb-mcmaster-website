import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function Header() {
    return (
        <header className="flex flex-row">
            <h1 className="text-2xl flex-1 font-bold py-3">Roster</h1>
        </header>
    );
}

async function MemberDetails({ member }: { member: Prisma.StudentGetPayload<{}> }) {
    const userRole = await prisma.studentRole.findFirst({
        where: { student_id: member.id },
    });
    const role = await prisma.role.findFirst({
        where: { id: userRole?.role_id },
    });


    return (<section className="flex flex-col gap-4">
        <h2 className="text-xl flex-1 font-bold py-3">{member.name}</h2>
        <p className="text-md">{role?.name}</p>
    </section>);
}


export default async function Page() {
    const members = await prisma.student.findMany();

    return (
        <section className="flex flex-col gap-4 md:px-20">
            <Header />
            {members.map((member, index) => (
                <MemberDetails key={index} member={member} />
            ))}
        </section>);
}