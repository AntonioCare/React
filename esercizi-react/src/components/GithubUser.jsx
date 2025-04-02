import { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        setData(json);
      });
  }, [username]);

  return (
    <div>
      {data && (
        <>
          <h1>{data.name}</h1>
          <p> {data.login}</p>
          <img src={data.avatar_url} />
        </>
      )}
    </div>
  );
}
