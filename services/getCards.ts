export const getCards = async () => {
    const response = await fetch("/api/slider");
    if (!response.ok) throw new Error("Unable to fetch slider cards.");
    return response.json();
};