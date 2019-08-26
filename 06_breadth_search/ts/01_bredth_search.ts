/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-26 14:25:23
 * @LastEditTime: 2019-08-26 14:31:02
 * @LastEditors: Please set LastEditors
 */
const graph = {};
graph["you"] = ["alice", "bob", "claire"];
graph["bob"] = ["anuj", "peggy"];
graph["alice"] = ["peggy"];
graph["claire"] = ["thom", "jonny"];
graph["anuj"] = [];
graph["peggy"] = [];
graph["thom"] = [];
graph["jonny"] = [];

const person_is_seller = (name:string) => name[name.length-1] === 'm'


const search = (name:string) => {
    let search_queue:any[] = [];

    search_queue = search_queue.concat(graph[name])
    let searched:any[]=[];

    while(search_queue.length){
        let person = search_queue.shift();

        if(searched.indexOf(person) === -1){
            if(person_is_seller(person)){
                console.log(person)
                return true;
            }
            search_queue = search_queue.concat(graph[person])
            searched.push(person)
        }
    }

    return false;
}

search('you')