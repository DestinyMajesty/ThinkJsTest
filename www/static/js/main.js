    // console.log("jquery");
    // reqData={
    //     name:"peter",
    //     lover:"PanYiling",
    // }
    // url = '/deng/api'
    // info = fetch(url, {
    // method: 'post',
    // headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json' 
    // },
    // body: JSON.stringify(reqData),
    // credentials: 'include'
    // });
    // info.then((res) => res.json())
    // .then((res) =>  console.log("res___------->",res));

    //main.js
import React from 'react';
import ReactDom from 'react-dom';
import Component1 from './hello.js';

ReactDom.render(
    <Component1 />,
    document.getElementById('test2')
);