import React, {useState, useEffect, useContext, createContext} from 'react';
import {useRouter} from 'next/router';
import {ProjectSchema} from '@feedloop/qore-client';
import qoreContext, {client} from '../qoreContext';

const authContext = createContext(null);

const useCurrentUser = () => {
    /*
  * waiting for implementation:
   const currentMembers = qoreContext.views.currentMember.useListRow();
   const user = React.useMemo(() => {
     return currentMembers.data[0];
   }, [currentMembers.data]);
  */
    const router = useRouter();
    const [user, setUser] = React.useState<ProjectSchema['memberDefaultView']['read'] | undefined>();
    React.useEffect(() => {
        const {endpoint, organizationId, projectId} = client.project.config;
        client.project.axios
            .request<{data: ProjectSchema['memberDefaultView']['read']}>({
                baseURL: endpoint,
                url: `/orgs/${organizationId}/projects/${projectId}/me`,
                method: 'GET',
            })
            .then((resp) => {
                setUser(resp.data.data);
            })
            .catch(() => {
                router.push('/login');
            });
    }, []);
    return user;
};

export default useCurrentUser;
