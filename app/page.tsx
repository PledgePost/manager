import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";
interface Round {
  id: string;
  owner: string;
  ipoolAddress: string;
  name: string;
  startDate: string;
  endDate: string;
  articles: any;
}

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        Authenticate
      </div>
    </main>
  );
}
