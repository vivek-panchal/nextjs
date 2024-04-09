import Link from "next/link";

export default function Home() {
  return (
    <main className="flex-col justify-center align-item-center gap-10 mt-10">
      <h1 className="bg-blue-200 p-5 rounded-md font-bold my-10 w-4/12 mx-auto text-center  ">Next.js Fake User Managment System</h1>
      <Link className="bg-blue-200 p-5 rounded-md font-bold justify-between flex w-1/12  mx-auto" href="/users">Users Details</Link>
    </main>
  );
}
