export default function HobbyLinks() {
    let hobbyLinks = [
        "https://en.wikipedia.org/wiki/Skiing",
        "https://en.wikipedia.org/wiki/Rock_climbing"
    ]
    return (
        <div>
            <a href = {hobbyLinks[0]}>Skiing</a>
            <a href = {hobbyLinks[1]}>Rock Climbing</a>
        </div>
    );
}