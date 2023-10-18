// Models
import { User } from '../../../models/user.model.ts';

// Constants
import { LoadingMessage } from '../../../constants/messages/LoadingMessage.ts';

export default function HeaderLeft({userData} : {userData: User | undefined}) {
    return <div className="header-left">
        <h2>{userData ? "Nom du projet" : LoadingMessage.LOADING_PROJECT}</h2>
    </div>
}
