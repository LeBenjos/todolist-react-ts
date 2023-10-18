// Librairies
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

// Models
import { User } from '../../../models/user.model.ts';
import { Project } from '../../../models/project.model.ts';

// Constants
import { LoadingMessage } from '../../../constants/messages/LoadingMessage.ts';
import { HeaderText } from '../../../constants/texts/HeaderText.ts';

export default function HeaderLeft({ userData, projects }: { userData: User | undefined, projects: Project[] | undefined }) {
    const [project, setProject] = useState<Project | undefined>(undefined);
    const { id } = useParams<string>();

    useEffect(() => {
        if (!projects) return;
        setProject(projects.find((p: Project) => p.id === id));
    }, [projects, id])

    return <div className="header-left">
        <h2>{userData ?
            id ? project?.name : HeaderText.NOTHING_PROJECT :
            LoadingMessage.LOADING_PROJECT
        }</h2>
    </div>
}
