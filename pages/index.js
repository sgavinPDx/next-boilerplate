import Link from "next/link";
import App from "../components/App";

const Index = () => (
  <div>
    <p>Hello Next.js</p>
    <img src="/static/react.png" />
    <App></App>
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);

export default Index;
