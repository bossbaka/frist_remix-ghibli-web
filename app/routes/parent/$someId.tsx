import { useParams } from "remix";

export default function Para() {
  const { someId } = useParams();
  return <div>Para {someId} </div>;
}
