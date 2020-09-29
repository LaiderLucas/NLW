module.exports = async function insertConnections(db, {connections}) {
    const insertedConection = await db.run(`
    INSERT INTO connections (
        proffy_id,
        date
    ) VALUES (
        "${connections.proffy_id}",
        "${connections.date}"
    )
    `)
}