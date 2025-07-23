import PhotoList from "@/components/PhotoList";
import { getDictionary } from "./dictionaries";

export default async function Home({ params: { lang } }) {
  const dist = await getDictionary(lang);
  const response = await fetch(`${process.env.BASE_URL}/photos`);

  const photos = await response.json();

  return (
    <div>
      <PhotoList photos={photos} />
    </div>
  );
}
