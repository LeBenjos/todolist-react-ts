import { ImagePath } from "../../constants/paths/ImagePaths";
import "./Auth.css"

export default function Logo() {
    return <div className="logoContainer">
        <img src={ImagePath.LOGO} alt="Listly Logo" />
        <h1>Listly</h1>
    </div>
}
