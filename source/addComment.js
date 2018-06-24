$(document).ready(function(){
    buildForm();
    renderForm();
    submitForm();
});

// submission of the form
const submitForm = () => {
    $("input[type='submit']").click(function() {
        let comment = $("#user_comment").val();
        let user = $("#user_name").val();

        $(`<li>${comment}<div class="author">${user}</div></li>`).appendTo("#comment_list");

        event.preventDefault();

        // reset and hide the form
        hideForm();
    });
};

// display the form on button click
const renderForm = () => {
    $("#new_comment_button").click(function() {
        $("#new_comment").show();
    });
};

// hide the form after submission
const hideForm = () => {
    $("#new_comment")[0].reset();
    $("#new_comment").hide();
};

// the form in question
const buildForm = () => {
    $(`<form id="new_comment">
            <textarea id="user_comment" type="text" placeholder="Comment"/></textarea>
            <input id="user_name" type="text" placeholder="User"/>
            <input id="new_comment_submit_button" type="submit"/>
       </form>`).appendTo("#comments");
};
