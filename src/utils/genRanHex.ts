function genHex(size: number){
    return [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
}
export default genHex;