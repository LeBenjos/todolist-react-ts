// Models
import { User } from '../../../models/user.model.ts';

// Constants
import { LoadingMessage } from '../../../constants/messages/LoadingMessage.ts';
import { HeaderText } from '../../../constants/texts/HeaderText.ts';

export default function HeaderLeft({userData, project} : {userData: User | undefined, project: any}) {
    return <div className="header-left">
        <h2>{userData ? 
            project.length ? "Nom du projet" : HeaderText.NOTHING_PROJECT : 
            LoadingMessage.LOADING_PROJECT
        }</h2>
    </div>
}
