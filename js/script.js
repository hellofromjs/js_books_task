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
    console.log(`Price: ${book.price}`);

    console.log("------------------------")
}

function print_catalogue(catalogue)
{
    for (const category of catalogue) 
    {
        let most_expensive = 0;
        let least_expensive = Infinity;

        console.log(`${category.name} (${category.books.length} books)`);

        let books = category.books;

        // filtruoti ir pailti tik naujas knygas (2023)
        // books = category.books.filter((book) => new Date().getFullYear() == book.release_date);
        
        // surusiuoti knygas A -> Z
        // books = books.sort((a, b) => a.title.localeCompare(b.title));

        for (const book of books) 
        {
            if (book.price > most_expensive)
            {
                most_expensive = book.price;
            }

            if (book.price < least_expensive)
            {
                least_expensive = book.price;
            }


            print_book(book);
        }

        console.log(`Most expensive book in a category: ${most_expensive} and least expensive is ${least_expensive}`)
    }
}

print_catalogue(book_catalogue);