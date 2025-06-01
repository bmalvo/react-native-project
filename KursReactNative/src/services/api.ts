export const fetchCityData = async () => {

    const res = await fetch(`${process.env.EXPO_PUBLIC_API_URL}/current.json?key=${process.env.EXPO_PUBLIC_API_KEY}&q=kwidzyn`)
    return res.json()
}; 