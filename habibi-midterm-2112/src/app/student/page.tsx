export default function Student() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-32 px-16 bg-white dark:bg-black">
        <h1 className="text-4xl font-bold text-black dark:text-white mb-6">
          My Student Information
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Name: Obi<br />
          Student Number: 200586844
        </p>
      </main>
    </div>
  );
}
