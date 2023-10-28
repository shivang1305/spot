"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { User } from "@/app/utils/types";

interface UserProps {
  user: User;
}

const UserCard = ({ user }: UserProps) => {
  const router = useRouter();

  const handleUserClick = () => {
    router.push(`/user/detail/${user?.login}`);
  };
  return (
    <div
      key={user?.id}
      className="flex items-center border-b pb-2 hover:cursor-pointer"
      onClick={handleUserClick}
    >
      <Image
        src={user?.avatar_url}
        alt={`${user?.login}'s avatar`}
        height={80}
        width={80}
        priority
        className="rounded-full mr-4"
      />
      <div>
        <p className="text-xl font-semibold">{user?.login}</p>
      </div>
    </div>
  );
};

export default UserCard;
