export async function fetchTodo(id) {
  const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);

  return await data.json();
}
