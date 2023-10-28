import RepoCard from "@/app/components/RepoCard";
import Link from "next/link";
import React from "react";
import { Repo } from "@/app/utils/types";
import UserImage from "@/app/components/UserImage";

const UserDetail = async ({ params }: any) => {
  const apiUrl = process.env.API_URL;

  const res = await fetch(`${apiUrl}/users/${params.username}`);
  const user = await res.json();

  const repoRes = await fetch(`${apiUrl}/users/${params.username}/repos`);
  const repoData = await repoRes.json();

  return (
    <div className="p-4">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <div className="text-center">
          <UserImage user={user} />
          <h1 className="text-2xl font-semibold">{user?.name}</h1>
          {user?.html_url && (
            <Link href={user?.html_url}>
              <p className="text-gray-600">@{user?.login}</p>
            </Link>
          )}
          <p className="text-sm text-gray-600">{user?.bio}</p>
          <p className="text-sm text-gray-600">{user?.location}</p>
          {user?.company && (
            <p className="text-sm text-gray-600">Company: {user?.company}</p>
          )}
          {user?.twitter_username && (
            <Link href={`https://www.twitter.com/${user?.twitter_username}`}>
              <p className="text-sm text-blue-400">
                Twitter: @{user?.twitter_username}
              </p>
            </Link>
          )}
        </div>

        <div className="mt-6 text-center">
          <p>
            Followers: {user?.followers} - Following: {user?.following}
          </p>
          <p>Public Repositories: {user?.public_repos}</p>
        </div>

        <div className="mt-6">
          <h2 className="text-lg font-semibold">Repositories</h2>
          <div className="mt-3">
            {repoData.length > 0 &&
              repoData.map((repo: Repo) => (
                <RepoCard key={repo?.id} repo={repo} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
