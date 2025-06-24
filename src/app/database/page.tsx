import { createClient } from "@/utils/supabase/server";

const DBCheckPage = async () => {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
};

export default DBCheckPage;
