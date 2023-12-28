export const fetchData = async (url) => {
  const res = await fetch(url, {
    headers: {
      Authorization:
        "Bearer 6a09ce323058c4ba70774a9ae7daa6a5dab74736a51948b4b676e303dbf9e9fb",
    },
  });
  if (res.ok) {
    const data = await res.json();
    return data;
  }
  throw new Error("Something unexpected happened :c");
};
