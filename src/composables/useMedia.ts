export const useMedia = () => {
    const isMobile = () => {
        return window.matchMedia('(max-width: 567.98px)').matches
    }

    const isTablet = () => {
        return window.matchMedia('(max-width: 767.98px)').matches
    }

    const isLargeTablet = () => {
        return window.matchMedia('(max-width: 991.98px)').matches
    }

    return { isMobile, isTablet, isLargeTablet }
}
