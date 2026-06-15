"use client";

const signOut = () => console.log("logout");

export default function Header() {
  return (
    <header className="bg-white border-b p-4 flex justify-between">
      <input
        type="text"
        placeholder="Search solutions..."
        className="border rounded-lg px-4 py-2 w-80"
      />

      <button
        onClick={() => signOut()}
        className="bg-black text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </header>
  );
}