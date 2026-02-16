export interface PlayerStats {
    gamertag: string;
    rank: string;
    div: string;
    mmr: number;
    mmr_peak: number;
    wins: number;
    goals: number;
    mvps: number;
    shots: number;
    assists: number;
    saves: number;
    matches_played: number;
    winrate: string;
}

export const buildCoachPrompt = (coachId: number, stats: PlayerStats) => {
    // Determine Coach Persona
    const coachName = coachId === 1 ? "Azotedelosrojos (Coach Agresivo)" : "FusilaYComulga19 (Coach Analítico)";

    // Calculate derived stats for deeper analysis
    const goalsPerMatch = (stats.goals / stats.matches_played).toFixed(2);
    const savesPerMatch = (stats.saves / stats.matches_played).toFixed(2);
    const assistsPerMatch = (stats.assists / stats.matches_played).toFixed(2);
    const shootingPercentage = ((stats.goals / stats.shots) * 100).toFixed(1);

    let styleInstructions = "";

    if (coachId === 1) {
        styleInstructions = `
        ESTILO DE COACHING (Agresivo/Mecánico):
        - Sé directo, enérgico y motivador. Usa un tono de "entrenador exigente".
        - Enfócate en la velocidad, la presión, el juego aéreo y las mecánicas de tiro.
        - Si el shooting percentage es bajo (<30%), critica la precisión y sugiere entrenamiento de tiro.
        - Si los goles por partido son bajos (<1.5), exige más agresividad en ataque.
        - Usa frases cortas y contundentes.
        `;
    } else {
        styleInstructions = `
        ESTILO DE COACHING (Analítico/Estratégico):
        - Sé calmado, reflexivo y detallado. Usa un tono de "estratega certero".
        - Enfócate en el posicionamiento, la gestión de boost, las rotaciones y la toma de decisiones.
        - Si las asistencias son bajas, sugiere buscar más pases y juego en equipo.
        - Si los saves son altos pero el winrate bajo, sugiere que está jugando demasiado defensivo y cediendo presión.
        - Usa explicaciones lógicas y causa-efecto.
        `;
    }

    return `
    ACTÚA COMO UN COACH PROFESIONAL DE ROCKET LEAGUE.
    NOMBRE DEL COACH: ${coachName}
    
    ANALIZA AL SIGUIENTE JUGADOR BASADO EN SUS ESTADÍSTICAS:

    DATOS DEL JUGADOR:
    - Gamertag: ${stats.gamertag}
    - Rango Actual: ${stats.rank} (${stats.div})
    - MMR Actual: ${stats.mmr}
    - MMR Pico: ${stats.mmr_peak}
    - Winrate: ${stats.winrate}
    - Partidos Totales: ${stats.matches_played}
    
    ESTADÍSTICAS DETALLADAS:
    - Goles/Partido: ${goalsPerMatch}
    - Saves/Partido: ${savesPerMatch}
    - Asistencias/Partido: ${assistsPerMatch}
    - Precisión de Tiro: ${shootingPercentage}%

    ${styleInstructions}

    TU TAREA:
    Provee un análisis de 3 párrafos:
    1. OBSERVACIÓN GENERAL: ¿Qué nos dicen estos números sobre su nivel actual?
    2. PUNTOS FUERTES Y DÉBILES DETECTADOS: Basado en la data (ej: muchos goles pero pocos saves = ballchaser?).
    3. PLAN DE ACCIÓN INMEDIATO: 2 o 3 consejos específicos para subir al siguiente rango.

    Termina con una frase de cierre característica de tu estilo.
    `;
};
