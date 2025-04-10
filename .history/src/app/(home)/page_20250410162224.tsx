import Link from "next/link";

import { Navbar } from "./navbar";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      Click <Link href="/documents/123">
      <span className="text-blue-500 underline">&nbsp;here&nbsp;</span>
      </Link> to go to document id
    </div>
  )
}

export default Home;