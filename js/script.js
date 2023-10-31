let book_catalogue = [
    {
        name: "Fantasy",
        books: [
            {
                isbn: "FAN001",
                release_date: 2022,
                title: "DFantasy Book 1",
                num_of_pages: 120,
                price: 125.56,
            },
            {
                isbn: "FAN002",
                release_date: 2021,
                title: "CFantasy Book 2",
                num_of_pages: 150,
                price: 25.56,
            },
            {
                isbn: "FAN003",
                release_date: 2020,
                title: "AFantasy Book 3",
                num_of_pages: 170,
                price: 35.70,
            },
            {
                isbn: "FAN004",
                release_date: 2019,
                title: "BFantasy Book 4",
                num_of_pages: 190,
                price: 40.10,
            },
        ]
    },
    {
        name: "Poetry",
        books: [
            {
                isbn: "POE001",
                release_date: 2008,
                title: "DPoetry Book 1",
                num_of_pages: 99,
                price: 36.78,
            },
            {
                isbn: "POE002",
                release_date: 2023,
                title: "CPoetry Book 2",
                num_of_pages: 139,
                price: 78.80,
            },
            {
                isbn: "POE003",
                release_date: 2006,
                title: "BPoetry Book 3",
                num_of_pages: 159,
                price: 56.60,
            },
            {
                isbn: "POE004",
                release_date: 2005,
                title: "APoetry Book 4",
                num_of_pages: 179,
                price: 78.70,
            },
        ]
    },
    {
        name: "Horror",
        books: [
            {
                isbn: "HOR001",
                release_date: 2004,
                title: "GHorror Book 1",
                num_of_pages: 300,
                price: 100.05,
            },
            {
                isbn: "HOR002",
                release_date: 2006,
                title: "EHorror Book 2",
                num_of_pages: 500,
                price: 250.50,
            },
            {
                isbn: "HOR003",
                release_date: 2023,
                title: "FHorror Book 3",
                num_of_pages: 600,
                price: 13.37,
            },
            {
                isbn: "HOR004",
                release_date: 2000,
                title: "HHorror Book 4",
                num_of_pages: 650,
                price: 85.36,
            },
        ]
    },
];

function get_random_string()
{
    // add "a" at the start, because sometimes random string starts with a number which is not valid
    return "a" + Math.random().toString(36).slice(2, 7);
}

function create_book_list_item(ul, book)
{
    const li_1 = document.createElement('li');
    li_1.textContent = `ISBN: ${book.isbn}`;
    ul.appendChild(li_1);

    const li_2 = document.createElement('li');
    li_2.textContent = `Release year: ${book.release_date}`;
    ul.appendChild(li_2);

    const li_3 = document.createElement('li');
    let formatted_title = book.title;

    if (new Date().getFullYear() == book.release_date)
    {
        formatted_title += " (new book)";
    }

    li_3.textContent = `Title: ${formatted_title}`;
    ul.appendChild(li_3);

    const li_4 = document.createElement('li');
    li_4.textContent = `Number of pages: ${book.num_of_pages}`;
    ul.appendChild(li_4);

    const li_5 = document.createElement('li');
    li_5.textContent = `Price: ${book.price}`;
    li_5.appendChild(li_4);
}

function print_catalogue(catalogue)
{
    const accordion = document.querySelector('#accordionExample');
    const category_item_template = document.querySelector('#category-item');
    
    for (const category of catalogue) 
    {
        let reference = get_random_string();
      
        let category_item = category_item_template.content.cloneNode(true);
        let category_btn = category_item.querySelector('button');
        category_btn.setAttribute('data-bs-target', `#${reference}`);
        category_btn.setAttribute('aria-controls', reference);
        let category_content = category_item.querySelector('#collapseTemplate');
        category_content.id = reference;
        let category_body = category_item.querySelector('.accordion-body');

        accordion.appendChild(category_item);

        category_btn.textContent = category.name;

        let books = category.books;

        for (const book of books) 
        {
            const books_ul = document.createElement('ul');
            create_book_list_item(books_ul, book);
            category_body.appendChild(books_ul);
        }
    }
}

print_catalogue(book_catalogue);

