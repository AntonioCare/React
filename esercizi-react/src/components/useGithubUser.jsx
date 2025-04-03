import useSwr from "swr";

export default function useGithubUser(username) {
  const { data, error, isLoading, mutate } = useSwr(
    `https://api.github.com/users/${username}`
  );

  function handleRefreshUsers() {
    mutate();
  }
  return { data, isLoading, error, onRefresh: handleRefreshUsers };
}
