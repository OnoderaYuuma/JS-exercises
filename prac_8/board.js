"use strict";


const list = document.getElementById("list");

function prepend() {
    
    // ニックネームを取得
    let name = document.querySelector("#name").value;
    let text = document.querySelector("#text").value;
    const now = new Date();

    const createElement = document.createElement("p");
    createElement.innerHTML = `${name}さんの投稿<br>${text}<br>${now.toLocaleString()}`;
    list.prepend(createElement);
    
    document.querySelector("#name").value = "";
    document.querySelector("#text").value = "";
}