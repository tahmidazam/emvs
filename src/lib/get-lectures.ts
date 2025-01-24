import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { z } from "zod";

export const LectureSchema = z.object({
  title: z.string(),
  lecturers: z.array(z.object({ name: z.string() })),
  location: z.string(),
  timestamp: z.number(),
  description: z.string(),
});

export type Lecture = z.infer<typeof LectureSchema>;

export function getLectures(): Lecture[] {
  const lectureFilenames: string[] = fs.readdirSync(
    path.join(process.cwd(), "public", "lectures")
  );

  const lectures: Lecture[] = [];

  lectureFilenames.forEach((filename: string) => {
    const file = fs
      .readFileSync(path.join(process.cwd(), "public", "lectures", filename))
      .toString();

    const { content, data } = matter(file);

    const parseResult = LectureSchema.safeParse({
      ...data,
      description: content,
    });

    if (parseResult.success) {
      lectures.push(parseResult.data);
    }
  });

  return lectures;
}
