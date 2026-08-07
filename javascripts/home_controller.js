
// button functions:

downloadProject = (title, content) => {
    // JavaScript has no clean way of doing this, so I'm postponing this
    console.log("download project placeholder");
    const lazyDownloadMessageElement = document.getElementById("lazy-download-message");
    if (lazyDownloadMessageElement.style.display === "none") {
        lazyDownloadMessageElement.style.display = "block";
    } else if (lazyDownloadMessageElement.style.display === "block") {
        lazyDownloadMessageElement.style.display = "none";
    }
}

renderTextile = () => {
    console.log("render textile placeholder");
}

// BEGIN VERSION CONTROL SECTION

getHelp = () => {
    const hiddenHelpContentElement = document.getElementById("hidden-help-content");
    if (hiddenHelpContentElement.style.display === "block") {
        hiddenHelpContentElement.style.display = "none";
    } else {
        hiddenHelpContentElement.style.display = "block";
    }
}

versionControlAppend = (title, text) => {
    let last_session_contents = {
        title: title,
        text: text
    };
    localStorage.removeItem("last_session");
    localStorage.setItem("last_session", JSON.stringify(last_session_contents));
}

versionControlRevisit = () => {
    const raw_contents = localStorage.getItem("last_session");

    const last_session_contents = JSON.parse(raw_contents);

    if (last_session_contents === undefined || last_session_contents === null) {
        alert('no previous session is available to restore');
        return;
    }

    const titleElement = document.getElementById("project-title");
    const ideaElement = document.getElementById("project-idea");

    titleElement.value = last_session_contents.title;
    ideaElement.value = last_session_contents.text;
}


// END VERSION CONTROL SECTION


// button listeners:

// download button listener
downloadButtonElement = document.getElementById("download-button");
downloadButtonElement.addEventListener('click', () => {
    const projectTitleValue = document.getElementById("project-title").value;
    const projectIdeaValue = document.getElementById("project-idea").value;
    downloadProject(projectTitleValue, projectIdeaValue);
});

// render textile button listener
renderTextileButtonElement = document.getElementById("render-textile");
renderTextileButtonElement.addEventListener('click', () => {
    renderTextile();
});

// help button listener
helpButtonElement = document.getElementById("version-control-help");
helpButtonElement.addEventListener('click', () => {
    getHelp();
    console.log("help button clicked");
});

// append button listener
appendButtonElement = document.getElementById("append-button");
appendButtonElement.addEventListener('click', () => {
    const projectTitleValue = document.getElementById("project-title").value;
    const projectIdeaValue = document.getElementById("project-idea").value;
    versionControlAppend(projectTitleValue, projectIdeaValue);
    console.log("append button clicked");
});

// revisit button listener
revisitButtonElement = document.getElementById("revisit-button");
revisitButtonElement.addEventListener('click', () => {
    versionControlRevisit();
    console.log("revisit button clicked");
});

// clear all fields button listener
clearAllFieldsElement = document.getElementById("clear-all-fields");
clearAllFieldsElement.addEventListener('click', () => {
    const confirmClear = prompt(
        "Are you sure you want to clear all fields? You can use append to save your data. Type 'yes' to confirm.");
    if (confirmClear !== "yes") {
        return;
    }

    document.getElementById("project-title").value = '';
    document.getElementById("project-idea").value = ''
});
