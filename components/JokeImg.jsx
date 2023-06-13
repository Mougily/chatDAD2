export default function JokeImg (id){
    return (
        <img className="mt-5 mx-auto" src={`https://icanhazdadjoke.com/j/${id}.png`} />
    )
}