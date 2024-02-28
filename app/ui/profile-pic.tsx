"use client";
import Image from "next/image";
import profilePic from "/public/images/photo.png";

export default function ProfilePic() {
  return (
    <div className="flex flex-row items-center">
      <Image
        className="rounded-2xl inline-block overflow-hidden px-2"
        src={profilePic}
        alt="A photo of myself"
        width={300}
        height={300}
      />
    </div>
  );
}
