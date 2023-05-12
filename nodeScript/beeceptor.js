class beeceptor {
    
    constructor(){}

doRequest(){
    axios.post('https://block.free.beeceptor.com/category').then((res) => console.log(res))
}

}