export default function cononize(url){
    //TODO custom domain name
    const re = new RegExp('@?(https?:)?(\/\/)?(www\.)?((telegram|vk|twitter|github)[^\/]*\/)?([.a-zA-Z0-9]*)', 'i');
    const username = url.match(re)[6];
    return username;
}
