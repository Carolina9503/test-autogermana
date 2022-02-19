export const getElements = async () => {
  try {
    const url = `https://jsonplaceholder.typicode.com/todos`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
export const getElementById = async (id) => {
  try {
    const url = `https://jsonplaceholder.typicode.com/todos/${id}`;
    const resp = await fetch(url);
    const data = await resp.json();

    return data;
  } catch (error) {
    console.log(error);
    return {};
  }
};
