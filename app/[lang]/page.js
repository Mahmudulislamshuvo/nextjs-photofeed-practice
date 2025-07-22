import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dist = await getDictionary(lang);
  return <div>{dist.save}</div>;
}
