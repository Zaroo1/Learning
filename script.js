// script.js

// Example content uploaded by you (static data for now)
const uploadedContent = [
    {
        title: "THE YEJI RIVER",
        description: "THE YEJI RIVER IS PART IF RIVER VOLTA.",
        type: "video",
        source: "yeji.mp4",
    },
    

{
        title: "Looking for a remedial school?",
        description: "This school is headed and managed by Abdul-Rashid Villa.",
        type: "image",
        source: "priority.jpg",
    },
    

{
        title: "Our coding",
        description: "Learn how to design websites with us",
        type: "audio",
        source: "zaroo.m4a",
    },
];

// Function to load content into the "posts" section
function loadContent() {
    const postsSection = document.getElementById("posts");

    uploadedContent.forEach((item) => {
        const post = document.createElement("div");
        post.className = "post";

        let mediaElement = "";
        if (item.type === "image") {
            mediaElement = `<img src="${item.source}" alt="${item.title}" width="100%">`;
        } else if (item.type === "video") {
            mediaElement = `<video controls width="100%"><source src="${item.source}" type="video/mp4"></video>`;
        } else if (item.type === "audio") {
            mediaElement = `<audio controls><source src="${item.source}" type="audio/mpeg"></audio>`;
        }

        post.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.description}</p>
            <div class="media">${mediaElement}</div>
            <div class="feedback-buttons">
                <button onclick="likePost(this)">Like</button>
                <button onclick="dislikePost(this)">Dislike</button>
            </div>
        `;

        postsSection.appendChild(post);
    });
}

// Feedback button actions
function likePost(button) {
    button.innerHTML = "Liked!";
    button.disabled = true;
}

function dislikePost(button) {
    button.innerHTML = "Disliked!";
    button.disabled = true;
}

// Load content on page load
document.addEventListener("DOMContentLoaded", loadContent);
