import { signOut } from "firebase/auth";
import { auth } from "../context/firebase";

export default function Home() {
  return <>
    <div>Home</div>
    <input type="submit" value="LogOut" onClick={() => signOut(auth)} />
  </>
}
