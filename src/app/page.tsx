import Image from "next/image";

export default function Home() {
  return (
    <main style={{ padding: 48, fontFamily: "system-ui" }}>
      <h1>{process.env.NEXT_PUBLIC_SHOP ?? "No shop name set"}</h1>
      <p>Preview built by client-workspace.</p>
    </main>
  );
}
