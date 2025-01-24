import { Lecture } from "@/lib/get-lectures";
import { MDXRemote } from "next-mdx-remote/rsc";

export default function LectureList({ lectures }: { lectures: Lecture[] }) {
  return (
    <div className="space-y-12">
      {lectures.map((lecture) => (
        <div key={lecture.title}>
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-medium tracking-tight first:mt-0">
            {lecture.title}
          </h2>

          <div className="mt-6 space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Lecturers</p>
              <p>{lecture.lecturers.map((l) => l.name).join(", ")}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Location</p>
              <p>{lecture.location}</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground">Date & Time</p>
              <p>{new Date(lecture.timestamp * 1000).toDateString()}</p>
            </div>
          </div>

          <MDXRemote
            source={lecture.description}
            components={{
              p: (props) => (
                <p
                  {...props}
                  className="leading-7 [&:not(:first-child)]:mt-6"
                />
              ),
              ul: (props) => (
                <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />
              ),
            }}
          ></MDXRemote>
        </div>
      ))}
    </div>
  );
}
