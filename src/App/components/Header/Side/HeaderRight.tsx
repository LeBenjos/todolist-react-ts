// Models
import { User } from '../../../models/user.model.ts';

// Constants
import { LoadingMessage } from '../../../constants/messages/LoadingMessage.ts';
import { ImagePath } from '../../../constants/paths/ImagePaths.ts';
import { HeaderText } from '../../../constants/texts/HeaderText.ts';

export default function HeaderRight({userData} : {userData: User | undefined}) {
    return <div className="header-right">
        <div>
            <img src={userData ? ImagePath.DEFAULT_PICTURE_GREEN : ImagePath.DEFAULT_PICTURE_RED} alt="Default Profil Picture" />
            <h3>{userData ? userData.username : LoadingMessage.LOADING_NAME}</h3>
        </div>
        {userData && <button className="buttonCta">{HeaderText.BUTTON_ADD_TASK}</button>}
    </div>
}
