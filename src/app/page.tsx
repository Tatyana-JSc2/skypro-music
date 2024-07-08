//'use client';
import { getTracks } from "@/api/userApi";
import { Main } from "@/components/Main/Main";
import { TrackType } from "@/types/types";


export default async function Home() {
  const tracks: TrackType[] = await getTracks();
  return (
    <Main tracks={tracks} />
  );
}
