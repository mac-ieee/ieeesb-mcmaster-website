import { ChapterMember } from "@/models/api/students";
import { prisma } from "@/models/prisma";
import { MemberDetails } from "./member-details";

export default async function Roster({ members }: { members: ChapterMember[] }) {
    // Group members by role (e.g., Executive, General Member, etc)
    // Note: its possible for members to have multiple roles
    // so we will add them to each role they have
    // e.g., if a member is both an Executive and a General Member,
    // Ideally we'd sort them by access but as of right now I have not figured how to "store" access levels
    const roleMap = new Map<string, ChapterMember[]>();
    const roles = await prisma.role.findMany();
    for (const member of members) {
        // Grab role list
        const listRole = member.StudentRole.map((sr) => sr.Role.name);
        for (const role of roles) {
            // add to map if they have the role
            if (listRole.includes(role.name)) {
                if (!roleMap.has(role.name)) {
                    roleMap.set(role.name, []);
                }
                roleMap.get(role.name)?.push(member);
            }
        }
    }

    return (<div>
        {Array.from(roleMap.entries()).map(([role, members], index) => (
            <div key={index} className="mb-8">
                <h2 className="text-md font-bold mb-4">{role}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {members.map((member) => (
                        <MemberDetails member={member} key={member.id} />
                    ))}
                </div>
            </div>
        ))}
    </div>);
}