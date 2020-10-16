const Database = require('./db');

Database.then(async db => {
    // inserir dados na tabela
    await db.run(`
        INSERT INTO orphanages (
            lat,
            lng,
            name,
            about,
            whatsapp,
            images,
            instructions,
            opening_hours,
            open_on_weekends
        ) VALUES (
            "-27.5926317",
            "-48.5287365",
            "Lar das meninas",
            "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
            "9989879773",
            "https://images.unsplash.com/photo-1594575111057-47b35c5f98f7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs",
            "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
            "Horário de visitas Das 18h até 20h",
            "0"
        );
    `)

// consultar dados da tabela 
const selectedOrphanages = await db.all("SELECT * FROM orphanages")
console.log(selectedOrphanages)

// consultar somente 1 orfanato, pelo id
const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
console.log(orphanage)

})