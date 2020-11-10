export const getNewValue = (rect: DOMRect, clientX: number) => {
    const { width, left } = rect;

    const scale = width / 100;
    const distance = clientX - left;

    let result = Math.round(distance / scale);
    if (result < 0) return 0;
    if (result > 100) return 100;
    return result;
};
