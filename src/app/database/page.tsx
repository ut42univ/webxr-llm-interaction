import { createClient } from "@/utils/supabase/server";
import { NextPage } from "next";

const DBCheckPage: NextPage = async () => {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("instruments").select();

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
};

export default DBCheckPage;
