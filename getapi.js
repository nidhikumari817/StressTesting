import http from 'k6/http';
import {sleep} from 'k6';

export const options={
    vus:10,
    duration: '30s',
}
export default function(){
    http.get('https://www2.hm.com/en_in/index.html', {tags: {name: 'GetItemURL'},}); //Adding tags
    sleep(1);
}
