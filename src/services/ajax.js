export default class AjaxResourc {
    constructor(){
        this._apiBase = 'http://astrology/';
    }

    async getResource(url){
        const res = await fetch(`${this._apiBase}${url}`);
        if (!res.ok){
            throw new Error(`Could not fetch ${url}`)
        }
        return await res.json();
    }

    getInfoSite(){
        return this.getResource('?method=info_site');
    }
}