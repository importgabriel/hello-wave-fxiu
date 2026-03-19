import HelloButton from "@/components/HelloButton";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center space-y-8 p-8">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">
          Hi!
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Welcome to our simple hi page
        </p>
        <HelloButton className="bg-purple-500 hover:bg-purple-600" />
      </div>
    </main>
  );
}