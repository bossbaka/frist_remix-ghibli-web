import { Outlet } from "remix";

export default function Parent() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
