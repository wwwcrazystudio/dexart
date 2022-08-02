import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

export const useAnimation = () => {
    const enter = (el?: HTMLElement, delay?: number) => {
        if (el) {
            gsap.set(el, {
                opacity: 1,
                duration: 1,
                delay: delay || 0,
            })
            gsap.from(el, {
                y: 100,
                opacity: 0,
                duration: 1,
                delay: delay || 0,
            })
        }
    }

    const leave = (el?: HTMLElement, delay?: number) => {
        if (el) {
            gsap.to(el, {
                scale: 0.85,
                duration: 1,
                delay: delay || 0,
                onComplete: () => {
                    gsap.to(el, {
                        scale: 1,
                    })
                },
            })
        }
    }

    const trigger = (
        triggerEl?: HTMLElement,
        enterCallback?: () => void,
        leaveCallback?: () => void,
        start?: string | null,
        end?: string | null,
        startLeave?: string | null,
        endLeave?: string | null
    ) => {
        ScrollTrigger.create({
            trigger: triggerEl,
            start: start || `top bottom`,
            end: end || 'bottom bottom',
            /* scrub: true, */
            onEnter: () => {
                console.log('enter', triggerEl)
                enterCallback && enterCallback()
            },
            /*         onEnterBack: () => {
                console.log('enterBack', triggerEl)
                enterCallback && enterCallback()
            }, */
        })

        ScrollTrigger.create({
            trigger: triggerEl,
            start: startLeave || '-=100px',
            end: endLeave || '+=200px',
            /*  scrub: true, */
            onLeave: () => {
                console.log('leave', triggerEl)
                leaveCallback && leaveCallback()
            },
            /*          onLeaveBack: () => {
                console.log('leaveBack', triggerEl)
                leaveCallback && leaveCallback()
            }, */
        })
    }

    return { enter, leave, trigger }
}
