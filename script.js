(() => {
    // The general workflow is:
    // create an element
    // target its parent
    // prepend (or append) it as a child

    // DO THE SETUP

    // grab the closest EXISTING parent already in the DOM (on the page)
    const body = document.body;

    // grab all the sections and destructure it into an array
    const sections = [...document.querySelectorAll('section')];

    // map over them and store their id in a new array
    const ids = sections.map(section => section.id);

    // DO THE HARD WORK

    // create the new header
    const header = document.createElement('header');

    const ul = document.createElement('ul');

    // Which tool do we use to iterate over these steps?
    // We don't need a new array, so forEach works for us

    ids.reverse().forEach(id => {
        const li = document.createElement('li');

        const link = document.createElement('a');

        link.setAttribute('href', '#' + id); // TODO: get this programmatically

        const linkText = document.createTextNode(id.charAt(0).toLocaleUpperCase() + id.substring(1)); // TODO: get this programmatically

        // Prepend everything
        link.prepend(linkText);

        li.prepend(link);

        ul.prepend(li);
    });
    // Prepend header and body
    header.prepend(ul);

    body.prepend(header);
})();