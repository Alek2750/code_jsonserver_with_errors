import { url } from "inspector";

const ajaxBasic = (url, cb) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = () => {
        console.log('State: ' + request.readyState + ' Status: ' + request.status);
        if (request.readyState === 4 && request.status === 200) {
            cb(request);
        }
    }
    request.open('GET', url, true);
    request.send();
}
ajaxBasic('http://localhost:3333/api/users', (reg) => {console.log(JSON.parse(reg.responseText))});

