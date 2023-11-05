import catalogue from './data.js';

(function (catalogue)
{
    for (const category of catalogue) 
    {
        const category_body = render_category(category.name);

        for (const book of category.books) 
        {
            category_body.appendChild(create_book_properties_list(book));
        }
    }
})(catalogue);

function render_category(category_name)
{
	const accordion_container = document.querySelector('#accordionExample');
	const accordion_item_template = document.querySelector('#category-item');
	const unique_identifier = "a" + Math.floor(Math.random() * 99999);

	const accordion_item = accordion_item_template.content.cloneNode(true);

	const accordion_title = accordion_item.querySelector('button');
	accordion_title.setAttribute('data-bs-target', `#${unique_identifier}`);
	accordion_title.setAttribute('aria-controls', unique_identifier);
	accordion_title.textContent = category_name;

	const accordion_body_container = accordion_item.querySelector('#collapseTemplate');
	accordion_body_container.id = unique_identifier;

	const accordion_body = accordion_item.querySelector('.accordion-body');
	
	accordion_container.appendChild(accordion_item);

	return accordion_body;
}

function create_book_properties_list(book)
{
	const list = document.createElement('ul');

	const properties_to_print = [
		`ISBN: ${book.isbn}`,
		`Release year: ${book.release_date}`,
		`Title: ${new Date().getFullYear() == book.release_date ? book.title += " (new book)" : book.title }`,
		`Number of pages: ${book.num_of_pages}`,
		`Price: ${book.price}`,
	];

	for (const property of properties_to_print) {
		const list_item = document.createElement('li');
		list_item.textContent = property;
		list.appendChild(list_item);
	}

	return list;
}
