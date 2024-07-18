class ipecho{
    constructor(){
        this.api = "https://ipecho.net"
        this.headers={"user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36 Edg/126.0.0.0"}
    }
    async my_ip(){
        let req=await fetch(`${this.api}/plain`,{method:"GET",headers: this.headers});
        return req.text();
    }
}
module.exports = {ipecho};
