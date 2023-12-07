import React from "react";
import { Round } from "../page";
import { ethers } from "ethers";
async function getRound(id: string) {
  try {
    const res = await fetch(
      "https://api.studio.thegraph.com/query/52298/pledgepost_opgoerli_v4/version/latest",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: `
					query GetRounds($id: String!) {
						rounds(where: {id: $id}) {	
							id
							owner
							ipoolAddress
							name
							description
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
          variables: { id: id },
        }),
      }
    ).then((res) => res.json());

    return res.data?.rounds[0];
  } catch (e) {
    console.error(e);
  }
}
export default async function RoundDetail({ params }: any) {
  const round: Round = await getRound(params.roundId);
  if (!round) return <div>Round not found</div>;
  console.log("round", round);
  const decodedName: string = ethers.toUtf8String(round.name);
  const decodedDescription: string = ethers.toUtf8String(round.description);
  const formattedStartDate: string = new Date(
    Number(round.startDate) * 1000
  ).toLocaleDateString();
  const formattedEndDate: string = new Date(
    Number(round.endDate) * 1000
  ).toLocaleDateString();
  return (
    <main className="flex min-h-screen items-center p-24">
      <div className="flex  flex-col justify-start mx-auto ">
        <h1 className="text-2xl font-bold text-gray-800">{decodedName}</h1>
        <p className="text-base text-gray-500">{decodedDescription}</p>
        <p className="text-base text-gray-500">
          {formattedStartDate} - {formattedEndDate}
        </p>
      </div>
    </main>
  );
}
