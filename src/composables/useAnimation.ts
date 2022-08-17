import { gsap } from 'gsap'

gsap.config({
    force3D: true,
})

export const useAnimation = () => {
    const enter = (
        el: HTMLElement,
        delay?: number,
        from?: object,
        to?: object
    ) => {
        const fromOptions = from || {
            y: 100,
            opacity: 0,
            duration: 1,
            delay: delay || 0,
        }
        const toOptions = to || {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: delay || 0,
        }
        gsap.fromTo(el, fromOptions, toOptions)
    }

    const leave = (el: HTMLElement, delay?: number, options?: object) => {
        const animOptions = options || {
            opacity: 0,
            duration: 1,
            delay: delay || 0,
            onComplete: () => {
                gsap.set(el, {
                    opacity: 0,
                })
            },
        }
        gsap.to(el, animOptions)
    }

    const hide = (el: HTMLElement) => {
        gsap.set(el, {
            opacity: 0,
        })
    }

    const trigger = () => null

    return { enter, leave, trigger, hide }
}
