import UserComments from "../component/UserComments";
import { useEffect } from "react";

export default function User(props) {
  useEffect(() => {});
  return (
    <div>
      <div>
        <UserComments {...props} />
      </div>
      <div>

      </div>
    </div>
  );
}
