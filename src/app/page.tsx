import { createClient } from "../utils/supabase/server";

export default async function Home() {
  const supabase = await createClient()
  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul>
      {todos?.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}
