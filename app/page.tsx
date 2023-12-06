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
async function getRound() {
  try {
    const res = await fetch(
      "https://api.studio.thegraph.com/query/52298/pledgepost_mumbai/version/latest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
					query GetAllRounds($id: String!) {
						rounds(where: {id: $id}) {	
							id
							owner
							ipoolAddress
							name
							startDate
							endDate
							articles {
								id
								content
								articleId
								authorAddress
							}
						}
					}
					`,
          variables: { id: "1" },
        }),
      }
    ).then((res) => res.json());
    return res.data?.rounds;
  } catch (e) {
    console.error(e);
  }
}

async function getAllRound() {
  try {
    const res = await fetch(
      "https://api.studio.thegraph.com/query/52298/pledgepost_opgoerli_v3/version/latest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
					{
						rounds {
							id
							owner
							ipoolAddress
							name
							startDate
							endDate
							articles {
								id
								content
								articleId
								authorAddress
							}
						}
					}
					`,
        }),
      }
    ).then((res) => res.json());
    return res.data?.rounds;
  } catch (e) {
    console.error(e);
  }
}
export default async function Home() {
  const rounds: Round[] = await getAllRound();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center">
        Authenticate
      </div>
    </main>
  );
}
