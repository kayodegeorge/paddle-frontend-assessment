import { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";

const Github = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.github.com/search/repositories?q=created:>2022-06-17&sort=stars&order=desc"
      )
      .then((response) => {
        setRepos(response.data.items);
      });
  }, []);

  // console.log(repos);

  return (
    <div className="text-white">
      <h1 className="m-6 text-4xl"> GitHub Repos </h1>
      <div className="mx-6 my-12 space-y-6">
        {repos.map((repo) => (
          <div key={repo.id} className="flex items-center space-x-3">
            <div>
              <img
                src={repo.owner.avatar_url}
                alt={`${repo.owner.login} profile`}
                className="h-32"
              />
            </div>
            <div className="space-y-3">
              <h1 className="text-xl font-bold">{repo.name}</h1>
              <p className="text-sm">{repo.description}</p>
              <div className="flex items-center space-x-3">
                <span className="p-2 border">
                  Stars: {repo.stargazers_count}
                </span>
                <span className="p-2 border">
            Issues: {repo.open_issues_count}
                </span>
                <p>{`Submitted ${moment(
                  repo.created_at,
                  "YYYYMMDD"
                ).fromNow()} by ${repo.owner.login}`}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Github;