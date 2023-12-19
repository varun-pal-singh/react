const user = {
    name: "Varun Pal Singh",
    imageUrl: "https://avatars.githubusercontent.com/LionInTheCity14",
    imageSize: 90,
};

const idxOfGitHubUserName = user.imageUrl.lastIndexOf("/") + 1;
const gitHubUserName = user.imageUrl.slice(idxOfGitHubUserName); 

export default function Profile(){
    return (
        <>
            <h1>{user.name}</h1>
            <img 
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of " + gitHubUserName}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}