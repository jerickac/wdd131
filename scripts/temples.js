const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Fortaleza Brazil",
        location: "Fortaleza, Brazil",
        dedicated: "2011, June, 2",
        area: 36000,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fortaleza-brazil/400x250/1-Fortaleza-Temple-Photo-2233938.jpg"
    },
    {
        templeName: "Sapporo Japan",
        location: "Sapporo, Japan",
        dedicated: "2016, August, 21",
        area: 48480,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sapporo-japan/400x250/sapporo-japan-exterior-night-1945721.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, USA",
        dedicated: "1893, April, 6-24",
        area: 382207,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/400x250/salt-lake-temple-37762.jpg"
    }
];

cardsContainer = document.querySelector('#cards-container');

    const homeTemples = document.querySelector('#home');
    const oldTemples = document.querySelector('#old');
    const newTemples = document.querySelector('#new');
    const largeTemples = document.querySelector('#large');
    const smallTemples = document.querySelector('#small');
    const h2Title = document.querySelector('#h2-title');

temples.forEach((temple) => {
    image =
        `<div id="temple-card">
            <figure>
                <img src="${temple.imageUrl}" alt="a photo of the ${temple.templeName}" loading="lazy">
                <figcaption>${temple.templeName}</figcaption>
            </figure>
            <ul>
                <li>Location: ${temple.location}</li>
                <li>Dedicated in: ${temple.dedicated}</li>
                <li>Temple Area: ${temple.area} square feet</li>
            </ul>
        </div>`;

    cardsContainer.innerHTML += image;
    h2Title.textContent = 'Home';

    homeTemples.addEventListener("click", () => {
        cardsContainer.innerHTML -= image;
        cardsContainer.innerHTML = "";
    });

    oldTemples.addEventListener("click", () => {
        cardsContainer.innerHTML -= image;
        cardsContainer.innerHTML = "";
    });

    newTemples.addEventListener("click", () => {
        cardsContainer.innerHTML -= image;
        cardsContainer.innerHTML = "";
    });

    largeTemples.addEventListener("click", () => {
        cardsContainer.innerHTML -= image;
        cardsContainer.innerHTML = "";
    });

    smallTemples.addEventListener("click", () => {
        cardsContainer.innerHTML -= image;
        cardsContainer.innerHTML = "";
    });
});

homeTemples.addEventListener("click", () => {
    temples.forEach((temple) => {
        image =
            `<div id="temple-card">
                <figure>
                    <img src="${temple.imageUrl}" alt="a photo of the ${temple.templeName}" loading="lazy">
                    <figcaption>${temple.templeName}</figcaption>
                </figure>
                <ul>
                    <li>Location: ${temple.location}</li>
                    <li>Dedicated in: ${temple.dedicated}</li>
                    <li>Temple Area: ${temple.area} square feet</li>
                </ul>
            </div>`;
        
        cardsContainer.innerHTML += image;
        h2Title.textContent = 'Home';

        });
    }
);

oldTemples.addEventListener("click", () => {

    getOldTemples = temples.map((temple) => {
        i = 0;
        year = "";

        while(i<=3) {
            year += temple.dedicated[i];
            i++;
        }

        numberYear = parseInt(year);
    
        if (numberYear < 1900) {

                image =
            `<div id="temple-card">
                <figure>
                    <img src="${temple.imageUrl}" alt="a photo of the ${temple.templeName}" loading="lazy">
                    <figcaption>${temple.templeName}</figcaption>
                </figure>
                <ul>
                    <li>Location: ${temple.location}</li>
                    <li>Dedicated in: ${temple.dedicated}</li>
                    <li>Temple Area: ${temple.area} square feet</li>
                </ul>
            </div>`;

            cardsContainer.innerHTML += image;
            h2Title.textContent = 'Old';

        }
    });
});

newTemples.addEventListener("click", () => {

    getNewTemples = temples.map((temple) => {
        i = 0;
        year = "";

        while(i<=3) {
            year += temple.dedicated[i];
            i++;
        }

        numberYear = parseInt(year);
    
        if (numberYear >= 2000) {

                image =
            `<div id="temple-card">
                <figure>
                    <img src="${temple.imageUrl}" alt="a photo of the ${temple.templeName}" loading="lazy">
                    <figcaption>${temple.templeName}</figcaption>
                </figure>
                <ul>
                    <li>Location: ${temple.location}</li>
                    <li>Dedicated in: ${temple.dedicated}</li>
                    <li>Temple Area: ${temple.area} square feet</li>
                </ul>
            </div>`;

            cardsContainer.innerHTML += image;
            h2Title.textContent = 'New';
        }
    });
});

largeTemples.addEventListener("click", () => {

    getlargeTemples = temples.map((temple) => {
    
        if (temple.area > 90000) {

                image =
            `<div id="temple-card">
                <figure>
                    <img src="${temple.imageUrl}" alt="a photo of the ${temple.templeName}" loading="lazy">
                    <figcaption>${temple.templeName}</figcaption>
                </figure>
                <ul>
                    <li>Location: ${temple.location}</li>
                    <li>Dedicated in: ${temple.dedicated}</li>
                    <li>Temple Area: ${temple.area} square feet</li>
                </ul>
            </div>`;

            cardsContainer.innerHTML += image;
            h2Title.textContent = 'Large';
        }
    });
});

smallTemples.addEventListener("click", () => {

    getSmallTemples = temples.map((temple) => {
    
        if (temple.area < 10000) {

                image =
            `<div id="temple-card">
                <figure>
                    <img src="${temple.imageUrl}" alt="a photo of the ${temple.templeName}" loading="lazy">
                    <figcaption>${temple.templeName}</figcaption>
                </figure>
                <ul>
                    <li>Location: ${temple.location}</li>
                    <li>Dedicated in: ${temple.dedicated}</li>
                    <li>Temple Area: ${temple.area} square feet</li>
                </ul>
            </div>`;

            cardsContainer.innerHTML += image;
            h2Title.textContent = 'Small';
        }
    });
});