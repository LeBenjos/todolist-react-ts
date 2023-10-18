// Librairies
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Models
import { User } from '../../../models/user.model.ts';
import { Project } from '../../../models/project.model.ts';

// Constants
import { LoadingMessage } from '../../../constants/messages/LoadingMessage.ts';
import { ImagePath } from '../../../constants/paths/ImagePaths.ts';
import { HeaderText } from '../../../constants/texts/HeaderText.ts';
import { LinkPath } from '../../../constants/paths/linkPaths.ts';

export default function HeaderRight({userData, projects} : {userData: User | undefined, projects: Project[] | undefined}) {
    const [project, setProject] = useState<Project | undefined>(undefined);
    const [addingMember, setAddingMember] = useState<boolean>(window.location.href.split("/")[5] === LinkPath.PROJECT_ADD_MEMBER ? true : false);
    const { id } = useParams<string>();

    useEffect(() => {
        if (!projects) return;
        setProject(projects.find((p: Project) => p.id === id));
    }, [projects, id])

    useEffect(() => {
        if (!project || window.location.href.split("/")[5] === LinkPath.PROJECT_ADD_MEMBER) return;
        setAddingMember(false);
    }, [project])

    return <div className="header-right">
        <div>
            <img src={userData ? ImagePath.DEFAULT_PICTURE_GREEN : ImagePath.DEFAULT_PICTURE_RED} alt="Default Profil Picture" />
            <h3>{userData ? userData.username : LoadingMessage.LOADING_NAME}</h3>
        </div>
        {(id && project) && 
            (addingMember ?
            <Link className="buttonCta" to={`project/${id}`} onClick={() => setAddingMember(!addingMember) } >{HeaderText.BUTTON_BACK_PROJECT}</Link> :
            <Link className="buttonCta" to={`project/${id}/add_member`} onClick={() => setAddingMember(!addingMember) } >{HeaderText.BUTTON_ADD_MEMBER}</Link>)
        }
    </div>
}
