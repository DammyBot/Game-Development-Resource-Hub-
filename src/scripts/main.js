const about = document.getElementById("about");
const resources = document.getElementById("resource");
const abouturl = '../json/about.json';
const resourceurl = '../json/resources.json';
(async function fetchData(url, url1) {
    const data = await fetch(url);
    const data1 = await fetch(url1);
    if(data.ok) {
        const response = await data.json();
        // console.log(response);
        createSection(response);
    }
    if(data1.ok) {
        const response = await data1.json();
        // console.log(response);
        createResource(response)
    }
})(abouturl, resourceurl);

function createSection(data){
    data.forEach(datum => {
        const div = document.createElement("div");
        const title = document.createElement("h3");
        const description = document.createElement("p");

        title.textContent = `${datum.icon} ${datum.title}`;
        description.textContent = `${datum.description}`;
        div.append(title,description);

        about.append(div);
    });
}

function createResource(data) {
    data.forEach(datum => {
        const div = document.createElement("div");
        const name = document.createElement("h3");
        const category = document.createElement("p");
        const description = document.createElement("p");
        const link = document.createElement("a");

        name.textContent = `${datum.name}`;
        category.textContent = `${datum.category}`;
        description.textContent = `${datum.description}`;
        link.textContent = `${datum.name}`;
        link.href = `${datum.link}`
        link.target = "_blank"
        div.append(name, description, link);

        resources.append(div);
    });
}