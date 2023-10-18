// Models
import { User } from '../../../models/user.model.ts';

// Constants
import { LoadingMessage } from '../../../constants/messages/LoadingMessage.ts';
import { ImagePath } from '../../../constants/paths/ImagePaths.ts';
import { CtaText } from '../../../constants/texts/CtaText.ts';

export default function HeaderRight({userData} : {userData: User | undefined}) {
    return <div className="header-right">
        <div>
            <img src={userData ? ImagePath.DEFAULT_PICTURE_GREEN : ImagePath.DEFAULT_PICTURE_RED} alt="" />
            <h3>{userData ? userData.username : LoadingMessage.LOADING_NAME}</h3>
        </div>
        {userData && <button className="buttonCta">{CtaText.ADD_TASK_V2}</button>}
    </div>
}
