"use client";

import Image from "next/image";
import { User } from "@/app/utils/types";
import { useState } from "react";

interface UserProp {
  user: User;
}

const UserImage = ({ user }: UserProp) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };
  return (
    <>
      <Image
        src={user?.avatar_url}
        alt={`${user?.login}'s avatar`}
        height={100}
        width={100}
        className="rounded-full mx-auto hover:cursor-pointer"
        onClick={toggleZoom}
      />
      {isZoomed && (
        <div
          className="fixed inset-0 flex items-center justify-center z-10 bg-black bg-opacity-75"
          onClick={toggleZoom}
        >
          <Image
            src={user?.avatar_url}
            alt="User Avatar"
            height={500}
            width={500}
            className="rounded-full hover:cursor-pointer"
          />
        </div>
      )}
    </>
  );
};

export default UserImage;
