export const fetchCityData = async () => {

    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=kwidzyn&lang=pl`)
    
    return res.json()
}; 

export const fetchFollowingDays = async () => {
    
    const res = fetch(`${process.env.EXPO_PUBLIC_API_URL}/forecast.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=kwidzyn&lang=pl&days=7`)

    return (await res).json()
};