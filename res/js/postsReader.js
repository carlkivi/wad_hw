/*
Task2 JSON validator https://jsonlint.com/

Task3 JSON endpoint https://www.npoint.io/docs/10824c6d32f7fdcc636e
 */

let jsonURI = "https://api.npoint.io/10824c6d32f7fdcc636e";
let jsonLocalURI = "/res/json/posts.json";

//Määrake sellega kust andmeid võtta
//Siis ei pea kogu aeg koodi välja/sisse kommenteerima
let isDataLocal = true;

$(function (){
    function getPosts() {
        return $.get({
            url: jsonURI,
            success: function (response) {
                return response;
            },
            error: function (e) {
                alert(`error retrieving posts: ${JSON.stringify(e)}`);
            },
        })}

    function getPostsLocally() {
        return $.get({
            url: jsonLocalURI,
            success: function (response) {
                return response;
            },
            error: function (e) {
                alert(`error retrieving posts: ${JSON.stringify(e)}`);
            },
        })}

    // function for dropdown menu
    $(document).ready(function(){
  		$("img.imgDropdown").click(function(){
    		$("div.dropdown-content").toggle();
  		});
	});



    // Siit algab main kood
    if(isDataLocal) {
        getPostsLocally().then((res) => {
            for (let post of res) {
                $("main").append(`
                    <div class="content-box">
                      <nav><div>Sep 18, 2020 15:16</div></nav>  
                      <div><h1>${post.title}</h1></div>
                      <div><img class="image" src=${post.url}></div>
                      <div class="text"><p>${post.body}</p></div>
                    </div>
                `);
            }
        })
    } else {
        getPosts().then((res) => {
            for (let post of res) {
                $("main").append(`
                    <div class="content-box">
                      <nav><div>Sep 18, 2020 15:16</div></nav>  
                      <div><h1>${post.title}</h1></div>
                      <div><img class="image" src=${post.url}></div>
                      <div class="text"><p>${post.body}</p></div>
                    </div>
                `);
            }
        })
        .catch(function (e) {
            alert(e);
        });
    }

});