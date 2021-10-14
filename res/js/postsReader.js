/*
Task2 JSON validator https://jsonlint.com/

Task3 JSON endpoint https://www.npoint.io/docs/10824c6d32f7fdcc636e
 */

let jsonURI = "https://api.npoint.io/10824c6d32f7fdcc636e";

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

    getPosts().then((response) => {
        alert(JSON.stringify(response));
    })
})