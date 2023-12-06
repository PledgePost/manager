"use client";
import React, { useEffect } from "react";
import { ethers } from "ethers";
import { useContractWrite, useNetwork } from "wagmi";
import { ABIs as ABI } from "@/constants";
import { RoundCard } from "@/components/RoundCard";
import {
  showDefaultToast,
  showErrorToast,
  showSuccessToast,
} from "@/hooks/useNotification";

const CreateRound = () => {
  const [startDate, setStartDate] = React.useState<Date>();
  const [endDate, setEndDate] = React.useState<Date>();
  const [name, setName] = React.useState<string>();
  const [description, setDescription] = React.useState<string>();
  const { chain } = useNetwork();
  const {
    data,
    isSuccess,
    write: create,
  } = useContractWrite({
    address: ABI.contractAddress as any,
    abi: ABI.abi,
    functionName: "createRound",
  });

  const createRound = async () => {
    if (!startDate || !endDate || !name || !description)
      return alert("Please fill all fields");

    try {
      showDefaultToast();
      create({
        args: [
          name,
          description,
          Math.floor(startDate.getTime() / 1000),
          Math.floor(endDate.getTime() / 1000),
        ],
      });
    } catch (e) {
      console.error(e);
      showErrorToast("Failed to create round");
    }
  };
  useEffect(() => {
    if (isSuccess && data && chain) {
      showSuccessToast(
        `${chain.blockExplorers?.etherscan?.url}/tx/${data.hash}`
      );
    }
  }, [chain, data, isSuccess]);

  return (
    <div className="flex justify-center">
      <RoundCard
        props={{
          startDate,
          endDate,
          setStartDate,
          setEndDate,
          setName,
          setDescription,
          createRound,
        }}
      />
    </div>
  );
};

export default CreateRound;
