import Roster from "@/components/roster";
import { getAllStudents } from "@/models/api/students";

function Header() {
    return (
        <header className="flex flex-row">
            <h1 className="text-2xl flex-1 font-bold py-3">Roster</h1>
        </header>
    );
}

export default async function Page() {
    const members = await getAllStudents();

    return (
        <section className="flex flex-col gap-4 md:px-20">
            <Header />
            <div className="md:flex-row flex-col flex md:space-x-4 md:space-y-0 space-y-2">
                <Roster members={members} />
            </div>
        </section>);
}