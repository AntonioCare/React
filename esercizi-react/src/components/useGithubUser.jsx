import { useState } from "react";

export default function useGithubUser(username) {
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
        <h1>
          {data.name}
          {data.login}
          {<img src={data.avatar_url} />}
        </h1>
      )}
    </div>
  );
}
