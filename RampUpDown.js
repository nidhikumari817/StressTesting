import http from 'k6';
import {check, sleep} from 'k6';

export const options ={
    stages:[
        {duration: '5s', target: 20},
        {duration: '10s', target: 20},
        {duration: '5s', target: 20},
    ],
};
export default function(){
    const res= http.get('https://httpbin.test.k6.io/');
    check(res, {
        'is status 200': (r) => r.status===200});
    sleep(1);
}