export const useFormatDate = () => {
    const formatDateToDMY = (isoDate) => {
        if (!isoDate) return '';
        const date = new Date(isoDate);
        const d = String(date.getDate()).padStart(2, '0');
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const y = date.getFullYear();
        return `${d}-${m}-${y}`;
    };

    return { formatDateToDMY };
};