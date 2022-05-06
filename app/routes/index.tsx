import { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
  return { title: "Index | Studio Ghibli", description: "Desc" };
};

// CLIENT SIDE
export default function Index() {
  return <div>Hello</div>;
}
