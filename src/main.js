import "babel-polyfill";
import * as commons from "./module";
import main_template from './mainpage.html';
import sub_template from './subpage.html';
import Mustache from 'mustache';
require("./style.css");


(function () {
    //init
    const wrapper = document.querySelector(".main");
    const datas = [
        {id: 1, name: 'john', addr: 'shanghai', cell:'123'},
        {id: 2, name: 'ella', addr: 'seattle', cell:'345'},
        {id: 3, name: 'tracy', addr: 'tokyo', cell:'839'}
    ]

    let idx = 0;
    let view = {
        lists: datas,
        index: function () {
            return idx++;
        }
    };

    let main_page = Mustache.render(main_template, view);
    commons.reloadContent(main_page, wrapper);

    const links = document.querySelectorAll("a");
    links.forEach(function (l) {
        l.addEventListener("click", onClick, false)
    });

    document.addEventListener("click",(e)=>{
        if(e.target.id == "back"){
           window.location.reload();
        }
    },false)

    function onClick(e){
        let id = e.target.getAttribute("data-id");
        let sub_view = fetch_data(datas,id);
        if(sub_view){
           let sub_page = Mustache.render(sub_template,sub_view);
           commons.reloadContent(sub_page,wrapper);
        }
    }

    function fetch_data(arr, id) {
        let result = arr.filter(a => a.id == id);
        return result ? result[0]:null;
    }

}());









