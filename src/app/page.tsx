export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-center sm:text-left">
          Welcome to the <span className="text-blue-500">Next.js</span> +{' '}
          <span className="text-blue-500">Tailwind CSS</span> +{' '}
          <span className="text-blue-500">TypeScript</span> Starter Template
        </h1>
        <p className="text-lg text-center sm:text-left">
          This is a simple starter template for building web applications using
          Next.js, Tailwind CSS, and TypeScript.
        </p>
        <p className="text-lg text-center sm:text-left">
          You can start building your application by modifying the files in the
          <code className="bg-gray-200 p-1 rounded">src/app</code> directory.
        </p>
      </main>
    </div>
  );
}
