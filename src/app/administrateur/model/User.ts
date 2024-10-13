export interface IUser{
    idUser : number,
    firstname : string,
    lastname : string,
    email : string,
    username : string,
    created_at : Date,
    updated_at : Date,
    linkInstagram : string,
    linkYoutube : string,
    linkSiteWeb : string
}




export interface IProject{
    idProjet : number,
    nomProjet : string,
    description : string,
    photo : string,
    dateProjet : Date
}


export interface ISkills{
    idSkill : number,
    nameSkill : string
}