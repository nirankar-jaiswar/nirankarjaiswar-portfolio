// src/Test.tsx
export default function Test() {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="bg-purple-600 text-white p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-4">Tailwind Test</h1>
          <p className="mb-4">If you can see this styled properly, Tailwind is working!</p>
          <button className="bg-white text-purple-600 px-4 py-2 rounded hover:bg-gray-100">
            Test Button
          </button>
        </div>
      </div>
    )
  }