import { readdir, readFile } from "fs/promises";
import matter from "gray-matter";
import { Role } from "@/interfaces/role";
import { join } from "path";

const ROLE_DIRECTORY = join(process.cwd(), "public", "roles");

/**
 * Read the roles of the society.
 * @returns An array of roles sorted by presentation priority.
 */
export default async function getRoles(): Promise<Role[]> {
  const files = await readdir(ROLE_DIRECTORY);

  const rolePromises = files.map(async (file: string) => {
    const fileContents = (
      await readFile(join(ROLE_DIRECTORY, file))
    ).toString();

    const parseResult = matter(fileContents);

    const role: Role = {
      description: parseResult.content,
      title: parseResult.data.title,
      priority: parseResult.data.priority,
      members: parseResult.data.members,
    };

    return role;
  });

  const roles = await Promise.all(rolePromises);

  return roles.sort((a: Role, b: Role) => a.priority - b.priority);
}
