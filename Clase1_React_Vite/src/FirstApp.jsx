import useFetch from './useFetch';

function FirstApp() {
  const { data, isLoading, hasError } = useFetch(`https://api.giphy.com/v1/gifs/search?api_key=7wDApwhPSatueozynfakcRC6pOm5X4bm&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error: {hasError.message}</div>;
  }

  return (
    <div>
      <p>Data: {JSON.stringify(data)}</p>
    </div>
  );
}

export default FirstApp;