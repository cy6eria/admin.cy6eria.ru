import React, { PropsWithChildren } from 'react';
import { useAuth, useOrganization, useUser, useSession, SignIn } from '@clerk/nextjs';

interface IsAdminProps {

}

export const IsAdmin = (props: PropsWithChildren<IsAdminProps>) => {
    const { session } = useSession();
    const auth = useAuth();
    const user = useUser();
    const org = useOrganization();

    console.log(auth, user, org);

    return session?.status ? <>{props.children}</> : <SignIn />;
}
