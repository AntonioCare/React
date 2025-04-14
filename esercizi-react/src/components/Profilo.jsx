import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function Profilo() {
  const { data, error, isLoading, mutate } = useSWR(
    "https://api.github.com/users/giacomo",
    fetcher
  );
  if (error) {
    return <p>Errore Nel Caricamento!</p>;
  }
  if (isLoading) {
    return <p>Caricamento Dati...</p>;
  }
  return (
    <>
      <h1>Profilo Utente</h1>
      <p>Nome Utente : {data.login}</p>
      <p>Bio Utenete : {data.bio}</p>
      <img src={data.avatar_url} alt="" />
    </>
  );
}
