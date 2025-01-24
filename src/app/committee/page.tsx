import Link from "next/link";
import committeeRoles from "./../../../public/committee-roles.json";
import Article from "@/components/article";

export default function Committee() {
  return (
    <Article title="Your 2024–25 EMVS Committee">
      <div className="space-y-12">
        {committeeRoles.map((role) => (
          <div key={role.name}>
            <h2 className="scroll-m-20 border-b pb-2 text-3xl font-medium tracking-tight first:mt-0">
              {role.name}
            </h2>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              {role.description}
            </p>

            <div className="mt-6 flex flex-row flex-wrap gap-4">
              {role.members.map((member) => (
                <div key={member.name} className="flex flex-col">
                  <p className="font-medium">{member.name}</p>
                  <Link
                    className="text-sm text-muted-foreground hover:underline"
                    href={`mailto:${member.email}`}
                  >
                    {member.email}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Article>
  );
}
