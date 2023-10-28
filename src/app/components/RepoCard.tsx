import { Repo } from "@/app/utils/types";
import Link from "next/link";

interface RepoProp {
  repo: Repo;
}

const RepoCard = async ({ repo }: RepoProp) => {
  const apiUrl = process.env.API_URL;

  const languageRes = await fetch(
    `${apiUrl}/repos/${repo?.owner?.login}/${repo?.name}/languages`
  );
  const languages = await languageRes.json();

  const forkRes = await fetch(
    `${apiUrl}/repos/${repo?.owner?.login}/${repo?.name}/forks`
  );
  const forks = await forkRes.json();

  return (
    <div className="border p-4 rounded-md border-gray-200 shadow-md">
      <div className="flex">
        <svg height="16" width="16" className="mr-1 mt-1">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
        </svg>
        <Link
          href={repo?.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 ml-2 hover:underline"
        >
          {repo?.name}
        </Link>
      </div>
      <p className="text-gray-600 text-sm mt-2">{repo?.description}</p>

      <div className="flex mt-4">
        {Object.keys(languages)[0] && (
          <>
            <span className="h-3 w-3 rounded-full bg-yellow-400 mr-2 mt-1.5"></span>
            <span>{Object.keys(languages)[0]}</span>
          </>
        )}

        {forks.length > 0 && (
          <div className="flex mx-4">
            <svg height="16" width="16" className="mt-1 mx-1">
              <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
            </svg>
            <span>{forks.length}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default RepoCard;
