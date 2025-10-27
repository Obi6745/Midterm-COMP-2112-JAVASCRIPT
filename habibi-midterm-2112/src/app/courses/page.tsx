import CourseInfo from "../component/CourseInfo";

export default function Courses() {
  const courses = [
    "COMP 2112 React.js",
    "COMP1072 Embedded Media", 
    "COMP 2084 ASP.net",
    "COMP 2081 Advanced CSS",
    "COMP 2143 Digital Marketing"
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          My Courses
        </h1>
        <ol className="list-decimal list-inside space-y-2">
          {courses.map((course, index) => (
            <CourseInfo key={course} courseName={course} />
          ))}
        </ol>
      </main>
    </div>
  );
}