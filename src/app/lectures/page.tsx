import Article from "@/components/article";
import { getLectures } from "@/lib/get-lectures";
import LectureList from "./lecture-list";

export default async function Lectures() {
  const lectures = getLectures();

  return (
    <Article title="Medicine And Beyond Lecture Series">
      <LectureList lectures={lectures} />
    </Article>
  );
}
