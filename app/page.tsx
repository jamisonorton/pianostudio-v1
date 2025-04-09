import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";

export default async function HomePage() {
  const users = await prisma.user.findMany();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-[family-name:var(--font-geist-sans)] text-[#333333]">
        Superblog
      </h1>
      <ol className="list-decimal list-inside font-[family-name:var(--font-geist-sans)]">
        {users.map((user) => (
          <li key={user.id} className="mb-2">
            {user.name}
          </li>
        ))}
      </ol>
    </div>

    // <div className="text-center container my-4 mx-auto">
    //   <h1 className="text-3xl mb4">Home Page</h1>
    //   <div className="flex gap-2 justify-center">
    //     <Button>Sign In</Button>
    //     <Button>Register</Button>

    //   </div>
    // </div>
  );
}
