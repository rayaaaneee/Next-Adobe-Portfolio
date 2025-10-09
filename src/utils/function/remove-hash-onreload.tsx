"use client";

import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useEffect } from "react";

const RemoveHashOnReload = () => {
    const pathname = usePathname();
    const router = useRouter();

    useEffect(() => {

        if (window.location.hash) {
          window.history.replaceState(null, '', pathname);
          window.location.reload();
        }

    }, [pathname, router]);

    return null;
}

const RemoveHashOnReloadWrapper = () => <RemoveHashOnReload />;
RemoveHashOnReloadWrapper.displayName = 'RemoveHashOnReloadWrapper';

export default RemoveHashOnReloadWrapper;