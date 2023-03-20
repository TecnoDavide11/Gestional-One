export class User{
  constructor(
    public email:string,
    public id:string,
    private _token:string,
    private _exipartionDate:Date,
    public isAuthenticated:boolean
  ){}

  get token(){
  if(!this._exipartionDate || new Date > this._exipartionDate){
    return null
  }else{
    return this._token
  }

  }
}
