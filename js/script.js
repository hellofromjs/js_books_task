let book_catalogue = [
    {
        name: "Fantasy",
        books: [
            {
                isbn: "FAN001",
                release_date: 2022,
                title: "Fantasy Book 1",
                num_of_pages: 120,
            },
            {
                isbn: "FAN002",
                release_date: 2021,
                title: "Fantasy Book 2",
                num_of_pages: 150,
            },
            {
                isbn: "FAN003",
                release_date: 2020,
                title: "Fantasy Book 3",
                num_of_pages: 170,
            },
            {
                isbn: "FAN004",
                release_date: 2019,
                title: "Fantasy Book 4",
                num_of_pages: 190,
            },
        ]
    },
    {
        name: "Poetry",
        books: [
            {
                isbn: "POE001",
                release_date: 2008,
                title: "Poetry Book 1",
                num_of_pages: 99,
            },
            {
                isbn: "POE002",
                release_date: 2023,
                title: "Poetry Book 2",
                num_of_pages: 139,
            },
            {
                isbn: "POE003",
                release_date: 2006,
                title: "Poetry Book 3",
                num_of_pages: 159,
            },
            {
                isbn: "POE004",
                release_date: 2005,
                title: "Poetry Book 4",
                num_of_pages: 179,
            },
        ]
    },
    {
        name: "Horror",
        books: [
            {
                isbn: "HOR001",
                release_date: 2004,
                title: "Horror Book 1",
                num_of_pages: 300,
            },
            {
                isbn: "HOR002",
                release_date: 2006,
                title: "Horror Book 2",
                num_of_pages: 500,
            },
            {
                isbn: "HOR003",
                release_date: 2001,
                title: "Horror Book 3",
                num_of_pages: 600,
            },
            {
                isbn: "HOR004",
                release_date: 2000,
                title: "Horror Book 4",
                num_of_pages: 650,
            },
        ]
    },
];

function print_book(book)
{
    let formatted_title = book.title;

    if (new Date().getFullYear() == book.release_date)
    {
        formatted_title += " (new book)";
    }


    console.log(`ISBN: ${book.isbn}`);
    console.log(`Release year: ${book.release_date}`);
    console.log(`Title: ${formatted_title}`);
    console.log(`Number of pages: ${book.num_of_pages}`);
}

function print_catalogue(catalogue)
{
    for (const category of catalogue) {
        console.log(`${category.name} (${category.books.length} books)`);

        for (const book of category.books) {
            print_book(book);
            console.log("------------------------")
        }
    }
}

print_catalogue(book_catalogue);