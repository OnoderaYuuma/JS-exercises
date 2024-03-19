'use strict';

let height = window.prompt("身長を入力してください");
if (false == height) {
    window.alert("入力がないと判定できません");

} else if (100 <= height) {
    let ticket = window.confirm("プレミアムチケットを持っていますか？");
    if (ticket) {
        window.alert("プレミアムシートに乗車可能です");
    } else {
        window.alert("通常のシートに乗車可能です");
    }

} else if(90 <= height) {
    window.alert("付き添いありで乗車可能です");

} else if(90 > height) {
    window.alert("乗車できません");

} else {
    window.alert("半角数字で入力してください");
}