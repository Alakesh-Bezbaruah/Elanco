import axios from 'axios'

export class UserService{
    private static URL:string = 'https://engineering-task.elancoapps.com/api/raw';

    public static getAllData(){
        let UserURL:string = `${this.URL}`
        return axios.get(UserURL);
    }
}