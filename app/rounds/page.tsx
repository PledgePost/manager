import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ethers } from "ethers";
import Image from "next/image";
import Link from "next/link";
export interface Round {
  id: string;
  owner: string;
  ipoolAddress: string;
  name: string;
  startDate: string;
  endDate: string;
  articles: any;
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
      {rounds.length === 0 ? (
        <p className="font-epilogue font-semibold text-[14px] leading-[30px] text-[#818183]">
          No round available
        </p>
      ) : (
        <>
          {rounds.map((round: any, index: number) => {
            const decodedName = ethers.toUtf8String(round.name);
            const formattedStartDate = new Date(
              Number(round.startDate) * 1000
            ).toLocaleDateString();
            const formattedEndDate = new Date(
              Number(round.endDate) * 1000
            ).toLocaleDateString();

            return (
              <Link href={`/rounds/${round.id}`} key={index}>
                <div className="rounded-[15px] bg-white cursor-pointer shadow-lg">
                  <div className="w-[400px] ">
                    <Image
                      src={"/favicon.ico"}
                      alt="roundImage"
                      width={400}
                      height={200}
                      priority
                    />
                  </div>
                  <div className="flex flex-col p-4">
                    <div className="flex items-center mt-[10px] gap-[12px]">
                      <Avatar>
                        <AvatarImage src="/favicon.ico" />
                        <AvatarFallback></AvatarFallback>
                      </Avatar>
                      <h3 className="font-epilogue font-semibold text-[16px] text-black text-left leading-[26px] truncate">
                        {decodedName}
                      </h3>
                    </div>
                    <div className="flex justify-between flex-wrap mt-[10px] gap-2">
                      <div className="flex flex-col">
                        <h4 className="font-epilogue font-semibold text-[14px] text-[#808191] leading-[22px]">
                          Start: {formattedStartDate} - End: {formattedEndDate}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </>
      )}
    </main>
  );
}
