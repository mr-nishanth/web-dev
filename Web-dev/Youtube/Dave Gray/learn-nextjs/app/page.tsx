import { Inter } from "next/font/google";
import styles from "./page.module.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Learn Nextjs</h1>
      <p>
        <Link href={"/about"}>Back to About page</Link> <br /> <br />
        <Link href={"/users"}>Back to User page</Link>
      </p>
    </main>
  );
}
