import { useLocation, useNavigationType } from 'react-router-dom';
import { useLayoutEffect } from 'react';

const ScrollToTop = () => {
    const { pathname, hash } = useLocation();
    const navigationType = useNavigationType();

    useLayoutEffect(() => {
        // Keep browser-restored scroll position when user navigates with back/forward.
        if (navigationType === 'POP' && !hash) {
            return;
        }

        if (hash) {
            const sectionId = hash.replace('#', '');

            requestAnimationFrame(() => {
                const element = document.getElementById(sectionId);

                if (element) {
                    const headerOffset = 88;
                    const targetPosition =
                        element.getBoundingClientRect().top + window.pageYOffset - headerOffset;

                    window.scrollTo({
                        top: Math.max(targetPosition, 0),
                        left: 0,
                        behavior: 'smooth',
                    });
                }
            });

            return;
        }

        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, [pathname, hash, navigationType]);

    return null;
}

export default ScrollToTop;