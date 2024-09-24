const imageUser ={
    name:'Henry',
    iamgeUrl: "https://i.imgur.com/yXOvdOSs.jpg",
    imageSize: 90

};

export default function Image(){
    return(
        <>
        <h3>{imageUser.name}</h3>
        <img src={imageUser.iamgeUrl} style={{
          width: imageUser.imageSize,
          height: imageUser.imageSize
        }}/>
        </>
    )
}